---
title: Printer selections from laravel
author: GP10DevHTS
date: 2024-12-01
category: General
views: 1200
replies: 7
---

> Original forum thread content:
> "Hey. I have this laravel app, it has multiple printing sections. is it possible to choose a printer for each section so that the user doesn't have to manually do that? I was hoping maybe i add a ui that lists the sections and the locally installed printers so the user can select which one will print for what section and maybe set a default printer. That way, the app can check w"

## Implementing Printer Selection and Management in Laravel Applications

GP10DevHTS describes a common need in enterprise or point-of-sale applications: the ability to programmatically select and direct print jobs to specific printers based on document type. This guide covers the architecture, libraries, and implementation patterns for printer management in Laravel.

### The Challenge of Printing from Web Applications

Web applications run in a browser—a sandboxed environment with limited access to local hardware. JavaScript's `window.print()` opens the print dialog but offers no programmatic printer selection. This is a security feature: a website shouldn't silently print without user consent.

To solve this, you need a **bridge** between your Laravel backend and the client's printers.

### Architecture Options

**1. Browser-Based with User Selection**
Simplest approach: Let users select printers from the browser's print dialog each time.
```javascript
window.print();
```
Pros: No additional software
Cons: No automation, inconsistent UX

**2. Electron / Tauri Desktop Wrapper**
Package your Laravel frontend in Electron or Tauri for desktop deployment. These provide Node.js APIs to access printers:
```javascript
// In Electron main process
const { Printer } = require('@electron/remote');
Printer.print(options);
```

**3. Print Server / Client Architecture**
A common enterprise pattern:
- Client machine runs a lightweight print agent
- Laravel sends print jobs via HTTP/API to the agent
- Agent handles local printing

This is the most common solution for PHP/Laravel apps that need reliable, programmatic printing.

### Laravel Print Libraries

**Mike42/Brands**
A popular library for printing PDFs and images:
```bash
composer require mike42/escpos-php
```

**Laravel-Printing**
Community packages like `rawilk/laravel-printing` or `ilahmad/laravel-printing`:
```bash
composer require rawilk/laravel-printing
```

**CUPS Integration**
On Linux/macOS, use the CUPS printing system. CUPS (Common UNIX Printing System) provides a standard interface for printing.

### Implementation: The Print Agent Pattern

**Server-Side (Laravel)**
Create jobs that queue print tasks:
```php
class PrintInvoice implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $printerName;
    public $invoiceId;
    
    public function __construct(string $printerName, int $invoiceId)
    {
        $this->printerName = $printerName;
        $this->invoiceId = $invoiceId;
    }
    
    public function handle()
    {
        $invoice = Invoice::find($this->invoiceId);
        $pdf = PDF::loadView('invoices.print', compact('invoice'));
        
        // Send to print agent
        Http::withToken(config('services.print-agent.token'))
            ->post(config('services.print-agent.url'), [
                'printer' => $this->printerName,
                'content' => base64_encode($pdf->output()),
                'type' => 'pdf',
            ]);
    }
}
```

**Client-Side (Print Agent)**
A simple Node.js/PHP agent listening for HTTP requests:
```php
// print-agent.php using CUPS
$command = escapeshellcmd("lp -d {$request->printer} -o raw");
$proc = proc_open($command, $descriptors, $pipes);
```

### Printer Mapping Configuration

Store printer mappings in the database for flexibility:
```php
Schema::create('printer_mappings', function (Blueprint $table) {
    $table->id();
    $table->string('section'); // e.g., 'kitchen', 'bar', 'receipt'
    $table->string('printer_name'); // e.g., 'HP LaserJet - Kitchen'
    $table->boolean('is_default')->default(false);
    $table->timestamps();
});
```

Allow users to configure mappings:
```php
class PrinterMappingController extends Controller
{
    public function index()
    {
        $printers = $this->getAvailablePrinters();
        $mappings = PrinterMapping::all();
        return view('printers.index', compact('printers', 'mappings'));
    }
    
    private function getAvailablePrinters()
    {
        // Query CUPS or connected printers
        exec('lpstat -p', $output);
        return $output;
    }
}
```

### Handling Multiple Print Sections

For your use case (multiple printing sections), create a mapping service:
```php
class PrinterSelector
{
    public function getPrinterForSection(string $section): ?string
    {
        $user = auth()->user();
        
        return PrinterMapping::where('section', $section)
            ->where('user_id', $user->id)
            ->value('printer_name')
            ?? PrinterMapping::where('section', $section)
                ->where('is_default', true)
                ->value('printer_name');
    }
}
```

### PDF vs. Direct Printing

**PDF Generation** (recommended):
- Generate PDF in Laravel using a library like Snappy, Browsershot, or DomPDF
- Send PDF to printer agent
- Agent uses system PDF viewer or sends to PDF-capable printer

**Direct Printing (ESC/POS)**:
For receipt printers, use ESC/POS commands directly:
```php
use Mike42\Escpos\Printer;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;

$connector = new WindowsPrintConnector("smb://server/printer");
$printer = new Printer($connector);
$printer->text("Hello World!\n");
$printer->cut();
$printer->close();
```

### Network Printers

For network printers, you have additional options:

**RAW Socket Printing** (port 9100):
Most modern network printers support raw socket printing on port 9100:
```php
$socket = fsockopen($printerIp, 9100);
fwrite($socket, $pdfContent);
fclose($socket);
```

**LPR/LPD Printing**:
Use `lpr` command for network printers:
```bash
lpr -H printer-ip -P queue-name -l file
```

### Case Study: Kitchen Printing in POS

Common use case in restaurant Point-of-Sale systems:
- Kitchen printer for orders
- Bar printer for drink orders
- Receipt printer for customer receipts

System uses section-based printer selection:
```php
$printer = (new PrinterSelector())->getPrinterForSection('kitchen');

PrintJob::dispatch($printer, $orderId, 'kitchen-order');
```

### Security Considerations

When implementing programmatic printing:
1. **Authentication**: Only authorized users/agents can send print jobs
2. **Validation**: Validate all content before printing
3. **Rate limiting**: Prevent print queue flooding
4. **Audit logs**: Log all print jobs for compliance

### Troubleshooting

Common issues:
- **Permissions**: Ensure the print agent runs with appropriate OS permissions
- **Firewall**: Port 9100 (raw printing) may need to be opened
- **Driver issues**: CUPS drivers must match the actual printer
- **Network discovery**: Set static IPs for network printers

### Conclusion

Programmatic printing from Laravel requires a client-side component—a print agent or desktop wrapper. Map sections to printers in the database, queue print jobs in Laravel, and have the agent handle local rendering.

For pure web solutions, you're limited to browser print dialogs. For POS or enterprise systems, the print agent pattern provides reliable, automated printing suitable for production use.

---

## Related Posts

- [Analytics dashboard](11-onward-ticketflight.md) — Sections and user preferences in dashboard systems.
- [Database Session creates another record after logging out](09-database-session-creates-another-record-after-logging-out.md) — State management between client and server in web applications.
- [Recently Started Paying for AI](18-recently-started-paying-for-ai.md) — AI tools for optimizing document generation for printing.

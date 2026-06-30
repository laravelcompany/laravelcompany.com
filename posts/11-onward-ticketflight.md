---
title: Onward ticket(flight)
author: luthfi552
date: 2024-12-01
category: Guides
views: 1300
replies: 11
---

> Original forum thread content:
> "Hi, i want build an onward ticket system.. Have you develop for onward ticket for visa approval?? Is it any api for book or reservation for best/cheap price?? Thank you"

## Building an Onward Ticket System for Visa Applications: APIs and Implementation

luthfi552 is looking to build an onward ticket system—a common requirement for visa applications, proof of onward travel, and border crossing documentation. Many countries require visitors to demonstrate they will leave the country, typically through a return or onward flight reservation. This guide covers the APIs, implementation strategies, and best practices for building such a system.

### Understanding the Onward/Return Ticket Requirement

Visitors to many countries (Schengen Area, Thailand, UAE, Indonesia, Philippines, etc.) must show proof of onward or return travel at immigration. This means:
- A confirmed flight leaving the country within the allowed stay period
- A reservation (not always a purchased ticket)

Travel agencies, visa specialists, and airlines offer "flight reservation for visa" services specifically for this purpose.

### Building the System: Core Requirements

**1. Flight Search and Display**
Users need to browse available flights for the onward journey.

**2. Flight Reservation (Not Purchase)**
For visa purposes, a reservation is often sufficient. This means:
- Hold the ticket for a limited time (usually 24-48 hours)
- No payment required upfront
- Cancellable without penalty

**3. Ticket Generation**
Generate a PDF or digital document showing the reservation details that satisfies embassy or immigration requirements.

**4. Verification**
Embassies and airlines sometimes verify the reservation via reservation code.

### API Options for Flight Booking and Search

**Amadeus Self-Service APIs**
Amadeus is one of the largest Global Distribution Systems (GDS). Their self-service APIs offer:
- **Flight Offers Search**: Search for flights by route, date, and passenger count
- **Flight Offers Price**: Get pricing for a flight offer
- **Flight Create Orders**: Book and ticket a flight (payment required)
- **Flight Inspiration Search**: Find destinations within a budget

```php
// Example using Amadeus API
$amadeus = Amadeus::client(env('AMADEUS_CLIENT_ID'), env('AMADEUS_CLIENT_SECRET'));

$response = $amadeus->shopping->flightOffersSearch->get(
    ['originLocationCode' => 'JFK',
     'destinationLocationCode' => 'LHR',
     'departureDate' => '2024-12-15',
     'adults' => 1]
);
```

**Skyscanner / Kiwi.com / Trip.com APIs**
These meta-search engines offer affiliate APIs or white-label solutions. They aggregate flights from multiple airlines.

**Travelport Universal API**
For enterprise integrations, Travelport provides a SOAP-based API with extensive GDS access.

**Duffel**
Duffel is a modern API-first airline booking platform:
```bash
composer require duffel/php
```
They offer a clean REST API with sandbox and production environments, suitable for building a complete booking flow.

**OpenTravel Alliance (OTA) APIs**
Standardized XML-based APIs for travel industry integration. More complex but very powerful.

### Implementation Strategy: Reservation vs. Booking

For visa onward tickets, you typically create a *reservation* or *hold*. Here's the distinction:

**Booking** (Amadeus Flight Create Orders):
- Ticket is issued
- Passenger name is on the reservation
- Usually requires payment
- Cancellation may incur fees

**Reservation / PNR Creation**
- Placeholder reservation created
- Time-limited hold (24-72 hours)
- Passenger names not always required at creation
- Cancellable
- Still satisfies most visa requirements

The reservation approach is more suitable for visa services because:
- Can be created quickly
- No payment processing required
- Easily cancelled/updated

### Mock Tickets for Testing

If you're building a prototype or don't need real data, consider generating mock tickets:
- Create a PDF template with flight details
- Add reservation code, airline logo, and passenger placeholder
- Include a disclaimer that it's a "dummy reservation for visa purposes"
- Generate a unique reservation code that can be verified

**Note**: Many embassies and border officials are aware of these services and may not accept clearly fake tickets. This approach carries risk.

### White-Label Solutions

If building from scratch is too complex, consider:
- **Visa Reservation API**: Services that specialize in onward tickets for visa purposes
- **Dummy Ticket Services**: Companies that provide PNR-based reservations for a fee
- **Travel Agency Partnerships**: White-label booking engines from established agencies

### Technical Architecture for a Laravel Implementation

```php
// 1. Search Flights
Route::get('/onward-tickets/search', [OnwardTicketController::class, 'search']);

// 2. Create Reservation
Route::post('/onward-tickets/reserve', [OnwardTicketController::class, 'reserve']);

// 3. Download Ticket
Route::get('/onward-tickets/{ticket}/download', [OnwardTicketController::class, 'download']);
```

**Database Schema**:
```php
Schema::create('onward_tickets', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained();
    $table->string('reservation_code');
    $table->string('airline');
    $table->string('flight_number');
    $table->string('origin');
    $table->string('destination');
    $table->dateTime('departure_time');
    $table->dateTime('arrival_time');
    $table->string('passenger_name');
    $table->string('status')->default('reserved'); // reserved, ticketed, expired, cancelled
    $table->timestamp('expires_at');
    $table->timestamps();
});
```

### PDF Generation

Use a package like [Spatie Browsershot](15-issue-with-embedding-custom-fonts-in-pdf-using-spatie-browsershot.md) or DOMPDF:
```php
$pdf = PDF::loadView('tickets.onward', compact('ticket'));
return $pdf->download("onward-ticket-{$ticket->reservation_code}.pdf");
```

### Pricing Strategy

- **Basic**: $5-$10 for 24-hour reservation
- **Premium**: $15-$25 for 72-hour reservation with customer support
- **Cancellation protection**: Additional fee

Ensure you comply with airline and GDS terms—some prohibit reselling reservations.

### Legal and Compliance Considerations

- Verify airline terms allow third-party reservations
- Understand refund/cancellation policies
- Comply with data protection laws (passenger data handling)
- Some countries explicitly require *purchased* tickets, not reservations

### Conclusion

Building an onward ticket system involves integrating with a GDS or travel API, managing reservation lifecycles, and generating official-looking documents. Start with the Amadeus Self-Service APIs for development and look at Duffel for production ease-of-use. Always verify embassy requirements—some require confirmed paid tickets, while others accept reservations.

For a quick MVP, focus on search and reservation-hold functionality without payment. This reduces compliance complexity and lets you validate market demand.

---

## Related Posts

- [Issue with embedding custom fonts in PDF using Spatie Browsershot](15-issue-with-embedding-custom-fonts-in-pdf-using-spatie-browsershot.md) — Generating ticket PDFs.
- [Finance - Self-hosted personal finance tracking web app](13-finance-self-hosted-personal-finance-tracking-web-app.md) — Handling payments for ticket reservations.
- [How to secure an API-generated video embed link and prevent user sharing](04-how-to-secure-an-api-generated-video-embed-link-and-prevent-.md) — API security and access control for reservations.

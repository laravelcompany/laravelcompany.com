import csv
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

spec = importlib.util.spec_from_file_location('importer', Path(__file__).parents[1] / 'scripts/import_prompts_csv.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class CsvImportTests(unittest.TestCase):
    def test_additive_idempotent_multiline_unicode_and_long_fields(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            folder = root / 'src/content/prompts'
            folder.mkdir(parents=True)
            old = {'act': 'Existing', 'prompt': 'Original', 'improvedPrompt': 'Curated'}
            original = json.dumps(old)
            (folder / '12-existing.json').write_text(original)
            rows = [ ['Existing','Original','TRUE','TEXT','one'],
                    ['Café / test', 'A quoted "value"\n' + 'x' * 145000, 'TRUE','STRUCTURED','two'],
                    ['Café / test', 'A different body', 'FALSE','IMAGE','three'] ]
            with (root / 'prompts.csv').open('w',newline='') as f:
                writer=csv.writer(f); writer.writerow(['act','prompt','for_devs','type','contributor']); writer.writerows(rows)
            self.assertEqual(module.import_csv(root), (3,2))
            self.assertEqual(module.import_csv(root), (3,0))
            self.assertEqual((folder/'12-existing.json').read_text(),original)
            self.assertEqual(len(list(folder.glob('*.json'))),3)
            added=[json.loads(p.read_text()) for p in folder.glob('csv-*.json')]
            self.assertEqual({p['prompt'] for p in added},{rows[1][1],rows[2][1]})
            self.assertTrue(any(p['forDevs'] for p in added))

    def test_every_source_row_is_present(self):
        root=Path(__file__).parents[1]
        entries=[json.loads(p.read_text()) for p in (root/'src/content/prompts').glob('*.json')]
        identities={module.identity(p['act'],p['prompt']) for p in entries}
        csv.field_size_limit(20_000_000)
        with (root/'prompts.csv').open(newline='') as f:
            for row in csv.DictReader(f):
                self.assertIn(module.identity(row['act'],row['prompt']),identities)

if __name__ == '__main__': unittest.main()

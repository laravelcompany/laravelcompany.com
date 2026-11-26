import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
test('contact statistics and guarantees require evidence before publishing',()=>{
 const source=fs.readFileSync('src/pages/contact.astro','utf8');for(const claim of ['120+ businesses helped','92% happy clients','Quick responses guaranteed'])assert.ok(!source.includes(claim),claim);
});
test('security requirements panel does not claim certification or audits',()=>{
 const source=fs.readFileSync('src/components/TrustCertifications.astro','utf8');for(const claim of ['EUCC Certified','ISO 27001:2022','ENISA Audited','Audited Annually','View Certificate','We meet and exceed','Full Audit Trail'])assert.ok(!source.includes(claim),claim);
 assert.ok(source.includes('Discuss your security and compliance requirements'));
});

const rc = require('./tnrc');

it('Get company name by RC number.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  const d = await rc.getDataByRC('B11207432014');
  expect(d['company_name']['FR']).toBe('STE EYE CATCHING DESIGN');
  expect(d['legal_form']).toBe('SARL');
  expect(d['reg_status']).toBe('Actif');
});

it('No results use case.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  const d = await rc.getDataByRC('NONE');
  expect(d).toBe(false);
});

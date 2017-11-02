const { tnrc } = require('./tnrc');

it('Get company name by RC number.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  const data = await tnrc.getDataByRC('B11207432014');
  expect(data['company_name']['FR']).toBe('STE EYE CATCHING DESIGN');
  expect(data['legal_form']).toBe('SARL');
  expect(data['reg_status']).toBe('Actif');
});

it('No results use case.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  const data = await tnrc.getDataByRC('NONE');
  expect(data).toBe(false);
});

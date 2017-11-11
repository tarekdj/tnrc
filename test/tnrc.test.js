const { tnrc } = require('../dist/tnrc');

it('Get company name by RC number.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  const data = await tnrc.getDataByRC('B11207432014');
  expect(data['company_name']['FR']).toBe('STE EYE CATCHING DESIGN');
  expect(data['legal_form']).toBe('SARL');
  expect(data['reg_status']).toBe('Actif');
});

it('No results found fo RC number.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  const no_rc = await tnrc.getDataByRC('NONE');
  expect(no_rc).toBe(false);
});

it('Get company name by MF number.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  const data = await tnrc.getDataByMF('1371092R');
  expect(data['company_name']['FR']).toBe('STE EYE CATCHING DESIGN');
  expect(data['legal_form']).toBe('SARL');
  expect(data['reg_status']).toBe('Actif');
});

it('No results found fo MF number.', async () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  const no_mf = await tnrc.getDataByMF('NONE');
  expect(no_mf).toBe(false);
});
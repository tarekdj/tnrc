const { tnrc } = require('../dist/tnrc');
const DEFAULT_TIMEOUT_INTERVAL = 60000;

it('Get company name by MF number.', async () => {
  jest.setTimeout(DEFAULT_TIMEOUT_INTERVAL);
  try {
    const data = await tnrc.getDataByMF('1371092R');
    expect(data['company_name']['FR']).toBe('STE EYE CATCHING DESIGN');
    expect(data['legal_form']).toBe('SARL');
    expect(data['reg_status']).toBe('Actif');
  }
  catch (err) {
    expect(JSON.stringify(err)).toContain('TimeoutError');
  }

});

it('No results found for MF number.', async () => {
  jest.setTimeout(DEFAULT_TIMEOUT_INTERVAL);
  try {
    const no_mf = await tnrc.getDataByMF('NONE');
    expect(no_mf).toBe(false);
  }
  catch (err) {
    expect(JSON.stringify(err)).toContain('TimeoutError');
  }
});

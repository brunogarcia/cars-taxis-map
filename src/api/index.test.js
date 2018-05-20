import api from './index';

describe('API actions work fine', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        ok: true,
        json: () => ({ id: 2056777518 }),
      });
    }));
  });

  it('Get cars data', async () => {
    const response = await api.getCars();
    expect(response.id).toBe(2056777518);
  });

  it('Get taxis data', async () => {
    const response = await api.getTaxis();
    expect(response.id).toBe(2056777518);
  });
});

describe('API actions do not work properly', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        ok: false,
        statusText: 400,
      });
    }));
  });

  it('Get cars data throws an error', async () => {
    expect.assertions(1);
    await expect(api.getCars()).rejects.toEqual(new Error(400));
  });

  it('Get taxis data throws an error', async () => {
    expect.assertions(1);
    await expect(api.getTaxis()).rejects.toEqual(new Error(400));
  });
});


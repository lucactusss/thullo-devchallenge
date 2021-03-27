import request from 'supertest';
import httpServer from '../../src/api/httpServer';

describe('Test HttpServer', () => {
  it('Request / should return some JSON !', async () => {
    const result = await request(httpServer).get('/').send();
    expect(result.status).toBe(200);
    expect(result.body).toStrictEqual({ text: 'Express + TypeScript Server' });
  });
});

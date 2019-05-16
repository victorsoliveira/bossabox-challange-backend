import app from '../../../src/app'
import request from 'supertest'

describe('GET /tools - ', (): void => {
  it('Retrieving tools must be works', async (): Promise<void> => {
    const result = await request(app).get('/tools')
    expect(result.ok).toBeTruthy()
  })
})

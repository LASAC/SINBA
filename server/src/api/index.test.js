import request from 'supertest'
import server from '../server'

describe('GET /api/ping', () => {
  it('should get "pong" as resopnse', () => request(server)
    .get('/api/ping')
    .set('Accept', 'application/json')
    .expect(200)
    .then((response) => {
      expect(response.body).toBe('pong')
    }))
})

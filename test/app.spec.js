const app = require('../src/app')

describe('APP', () => {
    it('GET / responds with 200 containing "Hello, World!"', () => {
        return supertest(app)
        .get('/')
        .expect(200, 'Hello, World!')
    })
})
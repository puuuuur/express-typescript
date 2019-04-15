import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from './../../../lib/app';
chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {
    it('should respond with HTTP 200 status', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.body.message).to.be.equal('GET request successfull!!!!');
            });
    });
})

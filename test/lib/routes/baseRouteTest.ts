import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../../../lib/app';
chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {
    it('Erhält auf der Base Route den erwarteten Response', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.body.message).to.be.equal('GET request successfull!!!!');
            });
    });
})

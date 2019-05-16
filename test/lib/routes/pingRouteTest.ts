import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../../../lib/app';
import config from 'config';

chai.use(chaiHttp);
const expect = chai.expect;
let serviceName : String = config.has('service.name') ? config.get('service.name') : 'default-service';

describe('pingRoute', () => {
    it('Erhält auf der Ping Route den erwarteten Response', () => {
        return chai.request(app)
            .get('/ping')
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.body.success).to.be.equal(true);
                expect(res.body.message).to.be.equal(`Ping returned from ${serviceName}`);
            });
    });
})

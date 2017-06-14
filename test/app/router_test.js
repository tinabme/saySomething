const sinon = require('sinon')
  , chai    = require('chai').should()
  , nock    = require('nock')
  , assert  = require('chai').assert
  , expect  = require('chai').expect;

describe('router.js', () => {
  const {mainRouter}  = require("../../app/router");
  const sayTools      = require('../../app/sayTools');
  const goodparams    = ['write','nice','Tina'];
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    //sinon lets you use sandbox to easily restore stubs and allow reuse of stubs with different returns
  });
  afterEach(function(done) {
    sandbox.restore();
    nock.cleanAll();
    done();
  })

  describe('mainRouter', () => {
    it('routes to the next action based on arguments', () => {
      sandbox.stub(sayTools, 'writeIt').returns(false);
      mainRouter(goodparams);
      sayTools.writeIt.called.should.be.equal(true);
    });

    it('throws an error when arguments is not actionable', (done) => {
      assert.throws(mainRouter, Error, "The action provided is not in our action list");
      done();
    });

  });
});

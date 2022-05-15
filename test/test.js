import assert from chai;
import should from chai;
import expect from chai;

import assert from mocha;

describe('User', function () {
    describe('#save()', function () {
      it('should save without error', function (done) {
        var user = new User('Luna');
        user.save(function (err) {
          if (err) done(err);
          else done();
        });
      });
    });
  });
  

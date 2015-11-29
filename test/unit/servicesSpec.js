'use strict';

/* jasmine specs for services go here */

describe('service', function() {

   // load modules
  beforeEach(module('phonecatApp'));

  // Test service availability
  it('check the existence of Phone factory', inject(function(Phone) {
      expect(Phone).toBeDefined();
    }));
});

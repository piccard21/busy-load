'use strict';
var expect = require('chai').expect;
var npmEs6WebpackSkeleton= require('../dist/app.js'); 

describe('#printout', function() {
    it('should print out a sentence', function() { 
        expect(npmEs6WebpackSkeleton.print()).to.equal('I get called from print.js!');
    }); 
    it('should print out hello world', function() { 
        expect(npmEs6WebpackSkeleton.hello()).to.equal('Hello world');
    }); 
});
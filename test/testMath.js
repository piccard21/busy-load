'use strict';
var expect = require('chai').expect;
var npmEs6WebpackSkeleton= require('../dist/app.js');
var math = npmEs6WebpackSkeleton.math; 
var mathSelection = npmEs6WebpackSkeleton.math; 

describe('#math', function() {
    it('should return the square-root of 9', function() { 
        expect(math.sqrt(9)).to.equal(3);
    }); 
});

describe('#mathSelection', function() {
    it('should return the square of 3', function() { 
        expect(math.square(3)).to.equal(9);
    }); 
});
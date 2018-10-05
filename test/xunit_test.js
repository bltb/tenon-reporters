/*global describe,it*/
"use strict";

var expect = require("must");
var reporter = require("../lib/xunit.js");
var json = require("./result-url.json");

describe("Reporter: xunit", function() {

    it("must return a response", function() {
        reporter(json, function(err, response) {
            expect(response).not.be.undefined();
        });
    });
});

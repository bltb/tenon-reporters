/*global describe,it*/
"use strict";

var expect = require("must");
var reporter = require("../lib/html.js");
var json = require("./result-url.json");

describe("Reporter: html", function() {

    it("must return a response", function() {
        reporter(json, function(err, response) {
            expect(response).not.be.undefined();
        });
    });
});

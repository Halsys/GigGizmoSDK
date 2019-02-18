"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var User = require("../../index.js").User;
describe("User class", function () {
    it("ModelName exists", function () {
        expect(User.ModelName).to.equal("User");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var JSONUser = new User("{\n\t\t\t\t\"firstName\": \"Basic\",\n\t\t\t\t\"middleName\": \"F\",\n\t\t\t\t\"lastName\": \"User\",\n\t\t\t\t\"birthday\": \"1994-09-04T12:00:00Z\",\n\t\t\t\t\"country\": \"US\",\n\t\t\t\t\"email\": \"user@network.com\"\n\t\t\t}");
            expect(JSONUser.firstName).to.equal("Basic");
            expect(JSONUser.middleName).to.equal("F");
            expect(JSONUser.lastName).to.equal("User");
            expect(JSONUser.birthday.toISOString()).to.equal("1994-09-04T12:00:00.000Z");
            expect(JSONUser.country).to.equal("US");
            expect(JSONUser.email).to.equal("user@network.com");
        });
        it("Empty", function () {
            var emptyUser = new User();
            expect(emptyUser.firstName).to.equal(null);
            expect(emptyUser.middleName).to.equal(null);
            expect(emptyUser.lastName).to.equal(null);
            expect(emptyUser.birthday).to.equal(null);
            expect(emptyUser.country).to.equal(null);
            expect(emptyUser.email).to.equal(null);
        });
        it("Copy Data", function () {
            var basicUser = new User({
                firstName: "Basic",
                middleName: "F",
                lastName: "User",
                birthday: "1994-09-04T12:00:00Z",
                country: "US",
                email: "user@network.com",
            });
            expect(basicUser.firstName).to.equal("Basic");
            expect(basicUser.middleName).to.equal("F");
            expect(basicUser.lastName).to.equal("User");
            expect(basicUser.birthday.toISOString()).to.equal("1994-09-04T12:00:00.000Z");
            expect(basicUser.country).to.equal("US");
            expect(basicUser.email).to.equal("user@network.com");
        });
    });
    describe("Validation", function () {
        var user = new User({
            firstName: "Basic",
            lastName: "User",
        });
        it("Password missing", function () {
            expect(user.validatePassword("").message).to.equal("Password missing");
        });
        it("Password short", function () {
            expect(user.validatePassword("****").message).to.equal("Password is too short");
        });
        it("Password long", function () {
            var tooLong = "*".repeat(257);
            expect(user.validatePassword(tooLong).message).to.equal("Password is too long");
        });
        it("Without number", function () {
            expect(user.validatePassword("Deadbeef").message).to.equal("Password does not have atleast one number");
        });
        it("With firstName", function () {
            expect(user.validatePassword("De@db33fBasic").message).to.equal("Password cannot contain your first name");
        });
        it("With lastName", function () {
            expect(user.validatePassword("De@db33fUser").message).to.equal("Password cannot contain your last name");
        });
        it("Valid password", function () {
            expect(user.validatePassword("De@db33f")).to.equal(null);
        });
    });
    describe("Validation", function () {
        it("Valid", function () {
            var user = new User({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                firstName: "Basic",
                lastName: "User",
                email: "Basic@network.com",
            });
            expect(user.isValid()).to.equal(true);
        });
        it("Missing id", function () {
            var user = new User({
                _id: "504e0cd7dd992d9be2f20b6f",
                firstName: "Basic",
                lastName: "User",
                email: "Basic@network.com",
            });
            expect(user.isValid()).to.equal(false);
        });
        it("Missing dateCreated", function () {
            var user = new User({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateModified: "2018-04-29T12:00:00Z",
                firstName: "Basic",
                lastName: "User",
                email: "Basic@network.com",
            });
            expect(user.isValid()).to.equal(false);
        });
        it("Missing dateModified", function () {
            var user = new User({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateCreated: "2018-04-29T12:00:00Z",
                firstName: "Basic",
                lastName: "User",
                email: "Basic@network.com",
            });
            expect(user.isValid()).to.equal(false);
        });
        it("Missing firstName", function () {
            var user = new User({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                lastName: "User",
                email: "Basic@network.com",
            });
            expect(user.isValid()).to.equal(false);
        });
        it("Missing lastName", function () {
            var user = new User({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                firstName: "Basic",
                email: "Basic@network.com",
            });
            expect(user.isValid()).to.equal(false);
        });
        it("Missing email", function () {
            var user = new User({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                firstName: "Basic",
                lastName: "User",
            });
            expect(user.isValid()).to.equal(false);
        });
    });
    describe("User change callback", function () {
        it("Create callback", function () {
            var destructor = User.onChange(function () { });
            expect(destructor).to.be.a("function");
            destructor();
        });
        it("Try callback vaild", function () {
            var destructor = User.onChange(function (user) {
                expect(user).to.be.a("object");
            });
            expect(destructor).to.be.a("function");
            User.setUser({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                firstName: "Basic",
                lastName: "User",
                email: "Basic@network.com",
            });
            destructor();
        });
        it("Try callback null", function () {
            var destructor = User.onChange(function (user) {
                expect(user).to.equal(null);
            });
            expect(destructor).to.be.a("function");
            User.setUser(null);
            destructor();
        });
    });
    describe("Get current user", function () {
        it("Valid user", function () {
            User.setUser({
                _id: "504e0cd7dd992d9be2f20b6f",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                firstName: "Basic",
                lastName: "User",
                email: "Basic@network.com",
            });
            var promise = User.getUser(false).then(function (user) {
                expect(user).to.be.a("object");
                expect(user.id).to.be.a("string");
                expect(user.isValid()).to.equal(true);
            });
            expect(promise).to.be.a("promise");
        });
        it("Null User", function () {
            User.setUser(null);
            var promise = User.getUser(false).then(function (user) {
                expect(user).to.equal(null);
            });
            expect(promise).to.be.a("promise");
        });
    });
});
//# sourceMappingURL=User.test.js.map
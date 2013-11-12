'use strict';
// create the app
var Plutus = Ember.Application.create();

// setup the store
Plutus.Store = DS.Store.extend({
    adapter: "DS.RESTAdapter"
});

// setup the routes
Plutus.Router.map(function() {
    this.resource('welcome', function() {
        this.route('login');
        this.route('signup');
    });
    this.resource('home');
    this.resource('accounts');
});
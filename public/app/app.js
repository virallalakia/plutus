'use strict';
var Plutus = Ember.Application.create();

Plutus.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter.create()
});

Plutus.Router.map(function() {
    this.resource('welcome', function() {
        this.route('login');
        this.route('signup');
    });
    this.resource('home');
    this.resource('accounts');
});
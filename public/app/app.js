'use strict';
var Plutus = Ember.Application.create({
    LOG_TRANSITIONS: true
});

Plutus.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter.create()
});

Plutus.Router.map(function() {
    this.resource('accounts');
});
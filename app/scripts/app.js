'use strict';
/*
 * Load external dependencies
*/
require('../lib/jquery/jquery.min');
require('../lib/bootstrap/bootstrap.min');
require('../lib/handlebars/handlebars');
require('../lib/ember/ember');
require('../lib/ember-data-shim/ember-data.min');

/*
    Creates a new instance of an Ember application and
    specifies what HTML element inside index.html Ember
    should manage for you.
*/
window.Plutus = Ember.Application.create({
    rootElement: "#plutusapp",
    LOG_TRANSITIONS: true
});

/*
    Loads all the required store and route files and configurations
*/
require('store');
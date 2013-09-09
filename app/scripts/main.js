require.config({
   paths: {
       "jquery": "lib/jquery/jquery",
       "ember": "lib/ember/ember",
       "ember-data": "lib/ember-data-shim/ember-data",
       "handlebars": "lib/handlebars/handlebars"
   }
});

require(['jquery', 'handlebars', 'ember', 'ember-data'], function () {
    console.log('Hello World');
});
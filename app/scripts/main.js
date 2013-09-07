require.config({
   paths: {
       "jquery": "lib/jquery/jquery",
       "ember": "lib/ember/ember",
       "handlebars": "lib/handlebars/handlebars"
   }
});

require([], function() {
    console.log('Hello World');
});
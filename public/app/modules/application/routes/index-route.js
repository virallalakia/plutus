Plutus.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('welcome.login');
    }
});
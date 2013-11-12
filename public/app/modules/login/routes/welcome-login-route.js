Plutus.WelcomeLoginRoute = Ember.Route.extend({

    /**
     * If user is already logged in redirect back to home page
     * (Mostly for handling browser back button)
     */
    beforeModel: function(transition) {
        var loggedIn = this.controllerFor('welcome.login').isLoggedIn();
        if(loggedIn) {
            this.transitionTo('home');
        }
    },
    
    // when route is loaded clear the controller of its previous state
    setupController: function (controller, context) {
        controller.reset();
    }
});
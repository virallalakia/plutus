Plutus.AuthenticatedRoute = Ember.Route.extend({

    /**
     * Checking if user is authenticated before rendering the route
     */
    beforeModel: function(transition) {
        this.checkLogin(transition);
    },

    /**
     * Checks if user is logged in, if not, redirect to login page
     */
    checkLogin: function(transition) {
        var loginController = this.controllerFor('welcome.login');
        if (!loginController.isLoggedIn()) {
            this.redirectToLogin(transition);
        }
    },

    /**
     * Redirects user back to login page
     */
    redirectToLogin: function(transition) {
        alert('Please login!');
        var loginController = this.controllerFor('welcome.login');
        loginController.set('afterLoginTransition', transition);
        this.transitionTo('welcome.login');
    },

    actions: {
        /**
         * If error is 401 from server, redirect to login page
         */
        error: function(reason, transition) {
            if(reason.status === 401) {
                this.redirectToLogin(transition);
            } else {
                alert('Oopsss!!! Something went wrong');
                console.error(reason);
            }
        }
    }
});
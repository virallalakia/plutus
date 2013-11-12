Plutus.WelcomeLoginController = Ember.Controller.extend({

    /**
     * Sets all login related properties to default value
     * (called by router on transition)
     */
    reset: function() {
        this.setProperties({
            username: null,
            password: null,
            errorMessage: null
        });
    },

    /**
     * Checks if user is logged in
     */
    isLoggedIn: function() {
        return $.cookie('token');
    },

    actions: {
        /**
         * Calls the auth endpoint of the server by passing username and pwd
         * and transitions to the appropriate route after login
         */
        login: function () {
            var self = this, data = this.getProperties('username', 'password');
            self.set('errorMessage', null);

            Ember.$.post('/auth', data).then(function(response) {
                // Check the response for the token
                self.set('errorMessage', response.message);

                if (response.success) {
                    var afterLoginTransition = self.get('afterLoginTransition');

                    if(afterLoginTransition) {
                        afterLoginTransition.retry();
                        self.set('afterLoginTransition', null);
                    } else {
                        self.transitionToRoute('home');
                    }
                }
            });
        }
    }
});
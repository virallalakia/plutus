Plutus.AccountsRoute = Plutus.AuthenticatedRoute.extend({
    model: function() {
        return this.store.find('account');
    }
});
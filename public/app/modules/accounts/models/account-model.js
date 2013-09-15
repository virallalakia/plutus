Plutus.Account = DS.Model.extend({
    name: DS.attr('string'),
    balance: DS.attr('number')
});

Plutus.Account.FIXTURES = [{
    id: 1,
    name: 'HDFC Bank',
    balance: 1000
}, {
    id: 2,
    name: 'Citibank',
    balance: 4000
}]
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before, After}) {
    Before(function() {
        return this.driver
            .init();
    });

    After(function() {          
        return this.driver
            .end();
    });
});
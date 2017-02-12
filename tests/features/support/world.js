const {defineSupportCode} = require('cucumber');
const webdriverio = require('webdriverio');

function World() {
	this.driver = webdriverio.remote({
    	desiredCapabilities: {
        	browserName: 'chrome'
    	}
	});
}

defineSupportCode(function({setWorldConstructor}) {
	setWorldConstructor(World)
})
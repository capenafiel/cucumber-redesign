const {defineSupportCode} = require('cucumber');
const expect = require('chai').expect;

defineSupportCode(function ({Given, When, Then}) {
  Given(/^Given I am on the home page of Google.cl$/, {timeout: 5 * 1000}, function () {
    return this.driver
      .url('http://www.google.cl/');
  });

  When(/^I type "(.*)" and press the enter key$/, function (text) {
    return this.driver
      .setValue('#lst-ib', text)
      .keys('Enter');
  });

  Then(/^I should see the link to the Yapo.cl web site$/, function () {
    return this.driver
      .waitForExist('h3 a', 5000)
      .execute(() => {
        return document.querySelector('h3 a').getAttribute('data-href');
      })
      .title((err, res) => {
        expect(res).to.equal('http://www.yapo.cl/');        
      });
  });


  When(/^I click on the Yapo.cl link$/, function () {
    return this.driver
      .click('h3 a');
  });

  Then(/^I should be redirected to Yapo.cl web site$/, function () {
    return this.driver
      .execute(() => {
        return window.location.hostname;
      })
      .then((res) => {
        expect(res.value).to.equal('www.yapo.cl');
      });
  });
});
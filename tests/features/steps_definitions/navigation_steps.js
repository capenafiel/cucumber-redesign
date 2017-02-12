const {defineSupportCode} = require('cucumber');
const expect = require('chai').expect;

defineSupportCode(function({Given, When, Then}) {
  /**
   * Scenario 1
   */
  Given(/^I am on the home page of Yapo.cl$/, function () {
    return this.driver
      .url('http://www.yapo.cl/');
  });

  When(/^I look the page title$/, function() {
    return;
  });

  Then(/^I should see "(.*)" as the page title$/, function (title) {
    return this.driver
      .title(res => {
        expect(res.value).to.equal(title);        
      });
  });

  When(/^I click on the Región Metropolitana link$/, {timeout: 20 * 1000}, function () {
    return this.driver
      .click('a[href*="region_metropolitana"]');
  });

  Then(/^I should be redirected to the listing page filtered by Región Metropolitana$/, function () {
    return this.driver
      .execute(() => {
        return window.location.pathname;
      })
      .then((res) => {
        expect(res.value).to.equal('/region_metropolitana');
      });
  });

  Then(/^I should see a lot of items in sale$/, function () {
    return this.driver
      .moveToObject('#footer')
      .execute(() => {
        return document.querySelectorAll('.listing_thumbs tbody tr').length;
      })
      .then((res) => {
        expect(res.value).to.be.above(10);
      });
  });

  /**
   * Scenario 2
   */
  When(/^I click on the Reglas link$/, {timeout: 10 * 1000}, function () {
    return this.driver
      .click('a[href*="ayuda/reglas.html"]');
  });

  Then(/^I should be redirected to the rules page$/, function () {
    return this.driver
      .title(res => {
        expect(res.value).to.equal('Reglas para los avisos | yapo.cl');
      });
  });
});
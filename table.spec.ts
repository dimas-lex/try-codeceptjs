const assert = require('assert');
const quantity = 5000;
const quantity2 = 100;


Feature('table');

Scenario('displays two todo items by default', async ({ I }) => {
  I.amOnPage('/');
  I.seeNumberOfElements('.App', 1);
  I.seeNumberOfElements('.weather', 1);
  I.seeNumberOfElements('.weather-title', 1);
  I.seeNumberOfElements('.AppRates', 1);
  I.seeNumberOfElements('.cy-rates', 1);
  I.seeNumberOfElements('.cy-rates', 1);
  I.seeNumberOfElements('.cy-rates-table', 1);
  I.seeNumberOfElements('.cy-rate-quantity', 1);
  I.seeNumberOfElements('.cy-rate-row', 1500);
  I.dontSee('.add-rate-form');

  I.saveScreenshot('display_1')
});

Scenario('can change quantity', async ({ I }) => {
  I.amOnPage('/');
  I.seeNumberOfElements('.App', 1);
  I.seeElement('.App');
  I.seeElement('.cy-rate-quantity');

  I.fillField('.cy-rate-quantity', quantity);
  I.seeElement('.cy-progress-bar');
  I.waitForResponse((response) =>  response.url().includes('/api/rates?quantity='));

  I.waitNumberOfVisibleElements('.cy-rate-row', quantity, 5);
  I.saveScreenshot('quantity_1');


  I.fillField('.cy-rate-quantity', quantity2);
  I.waitForResponse((response) =>  response.url().includes('/api/rates?quantity='));
  I.waitNumberOfVisibleElements('.cy-rate-row', quantity2, 5);
  I.saveScreenshot('quantity_2');

  I.dontSee('.add-rate-form');

});
Scenario('can change location', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.App');
  I.clearField('.weather-city');
  I.selectOption('.weather-country', 'United Kingdom');
  I.fillField('.weather-city', 'London');
  I.fillField('.cy-rate-quantity', 123);


  I.see('Current Weather for City of London, GB');
  let numOfRows = await I.grabNumberOfVisibleElements('.cy-rate-row');
  assert.equal(123, numOfRows);
});


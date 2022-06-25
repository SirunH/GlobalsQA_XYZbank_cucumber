const { Given, When, Then } = require('@wdio/cucumber-framework');
//const { default: pause } = require('webdriverio/build/commands/browser/pause');
const LoginPage = require('../pageobjects/login.page');
const registrationPage = require('../pageobjects/registration.page');
const faker = require("@faker-js/faker").faker;
const helper = require('../helper/helpers');
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const postCode = faker.address.zipCode();




Given("I am in login page and want to add new customer", async() => {
    await LoginPage.open();
    await LoginPage.goToLoginPage();
    await expect(browser).toHaveUrlContaining(helper.managerPath);
    await expect(browser).toHaveTitle(helper.pageTitle);
});

When("I fill need information in addCust page", async() => {
    await registrationPage.addCustomer();
    await expect(browser).toHaveUrlContaining(helper.addCustPath);
    await registrationPage.proceedRegistration(firstName, lastName, postCode);
    await browser.waitUntil(async() => {
        return browser.isAlertOpen();
    });
    let alertText = await browser.getAlertText();
    expect(alertText).toHaveText(helper.alertWindowText);
    await browser.acceptAlert();
});

When("I search the new created customer by post code in customers list, the customer is filtered from the list and after I click in delete button", async() => {
    await registrationPage.customersbutton();
    await expect(browser).toHaveUrlContaining(helper.allcustomersListPath);
    await registrationPage.getSearchField(postCode);
    let customerInfo = await registrationPage.customerinfo;
    await registrationPage.getDeleteButton();
    await expect(customerInfo).not.toBeExisting();
});
Then("I search the deleted customer again and there is no any information about that customer", async() => {
    await registrationPage.getSearchFieldSecondTime(postCode);
    let customerInfo = await registrationPage.customerinfo;
    await expect(customerInfo).not.toBeExisting();
});
const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const registrationPage = require('../pageobjects/registration.page');
const faker = require("@faker-js/faker").faker;
const helper = require('../helper/helpers');
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const postCode = faker.address.zipCode();




Given("I am in login page", async() => {
    await LoginPage.open();
    await LoginPage.goToLoginPage();
    await expect(browser).toHaveUrlContaining(helper.managerPath);
    await expect(browser).toHaveTitle(helper.pageTitle);
});

When("I fill fields in addCust page", async() => {
    await registrationPage.addCustomer();
    await expect(browser).toHaveUrlContaining(helper.addCustPath);
    await registrationPage.proceedRegistration(firstName, lastName, postCode);

});
Then("I should accept alert text", async() => {
    await browser.waitUntil(async() => {
        return browser.isAlertOpen();
    });
    let alertText = await browser.getAlertText();
    expect(alertText).toHaveText(helper.alertWindowText);
    await browser.acceptAlert();
});

Then("I should click in delete button", async() => {
    await registrationPage.customersbutton();
    await expect(browser).toHaveUrlContaining(helper.allcustomersListPath);
    await registrationPage.getSearchField(postCode);
    let customerInfo = await registrationPage.customerinfo;
    await registrationPage.getDeleteButton();
    await expect(customerInfo).not.toBeExisting();
});

Then("I should verify there is no any information about new customer", async() => {
    await registrationPage.getSearchFieldSecondTime(postCode);
    let customerInfo = await registrationPage.customerinfo;
    await expect(customerInfo).not.toBeExisting();
});
const Page = require('./page');

class RegistrationPage extends Page {

    get addCustomerButton() {
        return $("//button[@class='btn btn-lg tab'][1]");
    }
    get firstNameField() {
        return $("//div[1][@class='form-group']//input");
    }
    get lastNameField() {
        return $("//div[2][@class='form-group']//input");
    }
    get postCodeField() {
        return $("//div[3][@class='form-group']//input");
    }
    get addCustomerBtn() {
        return $("//button[@class='btn btn-default']");
    }
    get customersBtn() {
        return $("//button[3][@class='btn btn-lg tab']");
    }
    get customersList() {
        return $("//table[@class='table table-bordered table-striped']");
    }
    get searchField() {
        return $("//input[@class='form-control ng-pristine ng-untouched ng-valid']");
    }

    get deleteButton() {
        return $("//div//button[text()='Delete']");
    }
    get customerinfo() {
        return $(".table > tbody > tr")
    }
    get searchFieldSecTime() {
        return $("//input[@class='form-control ng-valid ng-dirty ng-valid-parse ng-touched']");
    }


    async addCustomer() {
        let customerButton = await this.addCustomerButton;
        await customerButton.click();
    }

    async insertFirstName(firtsName) {
        let field = await this.firstNameField;
        await field.click();
        await field.setValue(firtsName);
    }

    async insertLastName(lastName) {
        let field = await this.lastNameField;
        await field.click();
        await field.setValue(lastName);
    }

    async insertPostCode(postCode) {
        let field = await this.postCodeField;
        await field.click();
        await field.setValue(postCode);
    }


    async doAddingCustomer() {
        let button = await this.addCustomerBtn;
        await button.click();
    }
    async proceedRegistration(firtsName, lastName, postCode) {
        await this.insertFirstName(firtsName);
        await this.insertLastName(lastName);
        await this.insertPostCode(postCode);
        await this.doAddingCustomer();
    }
    async getAlertWindowText() {
        let alertT = await browser.getAlertText();
        await browser.acceptAlert();
    }
    async customersbutton() {
        let customersbuttonclick = await this.customersBtn;
        await customersbuttonclick.click();
    }
    async customersListTable() {
        let totalCustomers = await this.customersList;
        await totalCustomers.getText();
    }
    async getSearchField(postCode) {
        let searchButton = await this.searchField;
        await searchButton.click();
        await searchButton.setValue(postCode);
    }

    async getDeleteButton() {
        let deleteBtn = await this.deleteButton;
        await deleteBtn.click();
    }
    async getSearchFieldSecondTime(postCode) {
        let searchButtonSecondTime = await this.searchFieldSecTime;
        await searchButtonSecondTime.click();
        await searchButtonSecondTime.clearValue(postCode);
        await searchButtonSecondTime.click();
        await searchButtonSecondTime.setValue(postCode);
    }

}

module.exports = new RegistrationPage();
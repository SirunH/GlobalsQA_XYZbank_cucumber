const Page = require('./page');

class LoginPage extends Page {
    async open() {
        await super.open();
        await browser.maximizeWindow();
    }

    get bankManagerbutton() {
        return $("//button[text()='Bank Manager Login']");
    }

    async goToLoginPage() {
        let bankManager = await this.bankManagerbutton;
        await bankManager.click();
    }


}

module.exports = new LoginPage();
module.exports = class Page {
    open(path) {
        return browser.url(`https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login${path}`)
    }
}
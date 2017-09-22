var po = require("../PageObject/mainpageobject");


describe('Click On Investors', function () {

    it('should open a page', function () {
        browser.get('http://crunchinator.com/#/crunchinator');
    });

    it('should maximize a window', function () {
        browser.driver.manage().window().maximize();
    });

    it('verify continue to the Crunchinator text is displayed ', function () {
        browser.driver.sleep(5000);
        po.verifyContinueToCrunchinatorTextDisplayed();
    });

    it('click on the continue text', function () {
        browser.driver.sleep(5000);
        po.clickContinueToCruncinator();
    });
    it('Click on Investors Name ".406 Ventures"', function () {
        po.clickOnInvestorsName();
    });
    it('verify Count of Companies Name ".406 Venturess"', function () {
        browser.driver.sleep(2000);
        po.verifyCountOfCompaniesName();
    });
    it('verify Investors Name On Filters Bar', function () {
        browser.driver.sleep(2000);
        po.verifyInvestorsNameOnFiltersBar();
    });

});
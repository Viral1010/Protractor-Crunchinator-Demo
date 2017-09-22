var po = require("../PageObject/mainpageobject");


describe('Search Company name', function () {

    it('should open a page', function () {
        browser.get('http://crunchinator.com/#/crunchinator');
    });

    it('should maximize a window', function () {
        browser.driver.manage().window().maximize();
    });

    it('verify continue to the Crunchinator text is displayed ', function () {
        browser.driver.sleep(500);
        po.verifyContinueToCrunchinatorTextDisplayed();
    });

    it('click on the continue text', function () {
        po.clickContinueToCruncinator();
    });
    it('Enter company Name 0xdata in search box', function () {
        browser.driver.sleep(500);
        po.searchCompanyName();
    });
    it('Select Company From Search List', function () {
        browser.driver.sleep(500);
        po.selectCompanyFromList();
    });
    it('verify Count Investors Of 0xdata Company', function () {
        browser.driver.sleep(500);
        po.verifyCountInvestorsOf0xdataCompany();
    });
    it('Verify Company Name On Filter Bar', function () {
        browser.driver.sleep(500);
        po.verifyCompanyNameOnFiltersBar();
    });
    it('Verify Investor Name Of Company', function () {
        browser.driver.sleep(500);
        po.verifyInvestorsNameOfCompany();
    });

});
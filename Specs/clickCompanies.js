var po = require("../PageObject/mainpageobject");


describe('Click On Companies', function () {

    it('should open a page', function () {
        browser.get('http://crunchinator.com/#/crunchinator');
    });

    it('verify continue to the Crunchinator text is displayed ', function () {
        browser.sleep("10");
        po.verifyContinueToCrunchinatorTextDisplayed();
    });

    it('click on the continue text', function () {
        po.clickContinueToCruncinator();
    });
    it('Click on company Name 0xdata', function () {

        po.clickOnCompanyName0xdata();
    });
    it('verify Count Investors Of 0xdata Company', function () {
        browser.sleep(5);
        po.verifyCountInvestorsOf0xdataCompany();
    });
    it('Display List Investors Of 0xdata Company', function () {
        browser.sleep(5);
        po.displayListInvestorsOf0xdataCompany();
    });

});
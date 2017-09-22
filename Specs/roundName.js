var po = require("../PageObject/mainpageobject");


describe('Funding Round Name', function () {

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
        browser.driver.sleep(500);
        po.clickContinueToCruncinator();
    });
    it('Click on Round Name "Angel"', function () {
        po.clickOnRoundName();
    });

    it('verify Count of Companies for angel', function () {
        browser.driver.sleep(2000);
        po.verifyCountOfCompaniesForRoundName();
    });
    it('verify Count of Investors for angel', function () {
        browser.driver.sleep(2000);
        po.verifyCountOfInvestorsForRoundName();
    });
    it('Verify Round Name On Filter Bar', function () {
        browser.driver.sleep(500);
        po.verifyRoundNameOnFiltersBar();
    });

});
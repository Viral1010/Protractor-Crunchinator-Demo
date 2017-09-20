var po = require("../PageObject/mainpageobject");


describe('Crunchinator Home Page', function () {

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

    it('verify crunchinator logo', function () {
        po.verifyLogoTextIsDisplayed();

    });


});
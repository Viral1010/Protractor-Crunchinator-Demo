var commons = require("../Config/common.js")

var mainPageObject = {

    /*************************************
     * Element Locators
     * ************************************/
    continueToCruncinator_text: by.xpath("//span[contains(.,'Continue to the Crunchinator')]"),
    hungTightMessage_text: by.xpath('//div[contains(.,\'Hang tight\')][@ng-show="!initiated"]'),
    companyHQTitle: by.xpath("//h3[.='Company HQ']"),
    companyName: by.xpath(".//div[contains(text(),'0xdata')]"),
    CountOfInvestors: by.xpath(".//li[contains(text(),'Investors')]/span"),
    ListOfInvestors: by.xpath(".//h3[contains(text(),'Investors')]/../../div[2]/div[2]//td"),

    /************************************************************************
     /*  Functions
     /***********************************************************************


     /**
     * Click on Continue to Cruncinator link
     */
    clickContinueToCruncinator: function () {

        commons.findElement(mainPageObject.continueToCruncinator_text).then(function (foundElement) {
            foundElement.click();
        });
    },

    /**
     *   verify Continue to Crunchinator text is displayed on homepage
     */
    verifyContinueToCrunchinatorTextDisplayed: function () {
        commons.findElement(mainPageObject.continueToCruncinator_text).then(function (foundElement) {
            expect(foundElement.isDisplayed()).toBeTruthy();
        });
    },


    /**
     *   verify Company HQ is displayed
     */
    verifyCompanyHQIsDisplayed: function () {

        commons.findElement(mainPageObject.companyHQTitle).then(function (foundElement) {
            browser.sleep(7)
            expect(foundElement.getText()).toBe("Company HQ");
        });
    },


    /*
    * Wait until Hung Tight Message is disappear
    * */

    waitForHungTightMessageIsDisappear: function () {
        commons.waitUntilElementIsDisappear(commons.findElement(mainPageObject.hungTightMessage_text))

    },

    /**
     * click On Company Name 0xdata
     */
    clickOnCompanyName0xdata: function () {

        commons.findElement(mainPageObject.companyName).then(function (foundElement) {
            foundElement.click();
        });
    },

    /**
     * Verify Count Investors Of 0xdata Company
     */
    verifyCountInvestorsOf0xdataCompany: function () {

        commons.findElement(mainPageObject.CountOfInvestors).then(function (foundElement) {
            expect(foundElement.getText()).toBe('1');
        });
    },

    /**
     * Display List Investors Of 0xdata Company
     */
    displayListInvestorsOf0xdataCompany: function () {

        commons.findElement(mainPageObject.ListOfInvestors).then(function (foundElement) {
            for (i = 0; i < foundElement.length; i++) {
                document.write(foundElement[i].getText())
            }
        });
    },


}
module.exports = mainPageObject;

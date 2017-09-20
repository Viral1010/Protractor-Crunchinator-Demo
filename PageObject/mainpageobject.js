var commons = require("/Users/viralpatel/WebstormProjects/KleerMail/Config/common.js")
/*
var mainPageObject = function () {


    this.pageObject_todoText = by.model("todoList.todoText");


    this.findworkpage_clickUpworkLogoElement = function () {
        _page.commons.findElement(that.pageObject_todoText).then(function(foundElement){
            foundElement.click();
        });
    };

}*/

var mainPageObject = {

    /*************************************
     * Element Locators
     * ************************************/
    continueToCruncinator_text: by.xpath("//span[contains(.,'Continue to the Crunchinator')]"),
    hungTightMessage_text: by.xpath('//div[contains(.,\'Hang tight\')][@ng-show="!initiated"]'),
    companyHQTitle: by.xpath("//h3[.='Company HQ']"),


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


}
module.exports = mainPageObject;

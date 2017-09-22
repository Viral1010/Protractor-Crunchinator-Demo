var commons = require("../Config/common.js")

var mainPageObject = {

    /*************************************
     * Element Locators
     * ************************************/
    continueToCruncinator_text: by.xpath("//span[contains(.,'Continue to the Crunchinator')]"),
    hungTightMessage_text: by.xpath('//div[contains(.,\'Hang tight\')][@ng-show="!initiated"]'),
    companyHQTitle: by.xpath("//h3[.='Company HQ']"),
    companyName: by.xpath(".//div[contains(text(),'0xdata')]"),
    CountOfInvestors: by.xpath(".//li[contains(text(),'Investors')]/../li[2]/span"),
    ListOfInvestors: by.xpath(".//h3[contains(text(),'Investors')]/../../div[2]/div[2]//td"),
    companySearchButton: by.xpath(".//h3[contains(text(),'Companies')]/../../div[2]/div[1]//input"),
    selectCompanyFromSearchList: by.xpath(".//strong[contains(text(),'0xdata')]"),
    companyDetailPageLink: by.xpath(".//div[contains(text(),'0xdata')]/../a/i"),
    companyNameOnFiltersBar: by.xpath(".//span[contains(text(),'0xdata')]"),
    investorsName: by.xpath(".//div[contains(text(),'.406 Ventures')]"),
    investorsNameOfCompany: by.xpath(".//div[contains(text(),'Nexus Venture Partners')]"),
    investorsNameOnFiltersBar: by.xpath(".//span[contains(text(),'.406 Ventures')]"),
    CountOfCompanies: by.xpath(".//li[contains(text(),'Companies')]/../li[1]/span"),
    roundName: by.xpath(".//div[contains(text(),'Angel')]"),
    roundNameOnFiltersBar: by.xpath(".//span[contains(text(),'Angel')]"),


    c : function (name) {

        return by.xpath( "// " +name);
    },



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
     * Click On Investors Name
     */
    clickOnInvestorsName: function () {

        commons.findElement(mainPageObject.investorsName).then(function (foundElement) {
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
     * Verify Count Companies Name Of Nexus Venture Partners Investors
     */
    verifyCountOfCompaniesName: function () {

        commons.findElement(mainPageObject.CountOfCompanies).then(function (foundElement) {
            expect(foundElement.getText()).toBe('21');
        });
    },

    /**
     * Verify Company Name On Filters Bar
     */
    verifyCompanyNameOnFiltersBar: function () {

        commons.findElement(mainPageObject.companyNameOnFiltersBar).then(function (foundElement) {
            expect(foundElement.isDisplayed()).toBeTruthy();
        });
    },

    /**
     * verify Investors Name On Filters Bar
     */
    verifyInvestorsNameOnFiltersBar: function () {

        commons.findElement(mainPageObject.investorsNameOnFiltersBar).then(function (foundElement) {
            expect(foundElement.isDisplayed()).toBeTruthy();
        });
    },

    /**
     * Search Company Name
     */
    searchCompanyName: function () {

        commons.findElement(mainPageObject.companySearchButton).then(function (foundElement) {

            foundElement.sendKeys("0xdata");


        });
    },

    /**
     * Select company name from Search list
     */
    selectCompanyFromList: function () {
        commons.findElement(mainPageObject.selectCompanyFromSearchList).then(function (foundElement) {
            foundElement.click();
        });
    },

    /**
     * Select company Detail Page Link
     */
    clickOnCompanyDetailPage: function () {
        commons.findElement(mainPageObject.companyDetailPageLink).then(function (foundElement) {
            browser.actions().mouseMove(foundElement).click().perform();
            browser.driver.sleep(10000);
        });
    },

    /**
     * Verify Investors Name Of Company
     */
    verifyInvestorsNameOfCompany: function () {
        commons.findElement(mainPageObject.CountOfCompanies).then(function (foundElement) {
            expect(foundElement.isDisplayed()).toBeTruthy();
        });
    },

    /**
     * Click on Round Name
     */
    clickOnRoundName: function () {

        commons.findElement(mainPageObject.roundName).then(function (foundElement) {
            foundElement.click();
        });
    },

    /**
     * Verify Count of Companies for round name
     */
    verifyCountOfCompaniesForRoundName: function () {

        commons.findElement(mainPageObject.CountOfCompanies).then(function (foundElement) {
            expect(foundElement.getText()).toBe('1262');
        });
    },

    /**
     * verify Round Name On Filters Bar
     */
    verifyRoundNameOnFiltersBar: function () {

        commons.findElement(mainPageObject.roundNameOnFiltersBar).then(function (foundElement) {
            expect(foundElement.isDisplayed()).toBeTruthy();
        });
    },

    /**
     * Verify Count Of Investors For Round Name
     */
    verifyCountOfInvestorsForRoundName: function () {

        commons.findElement(mainPageObject.CountOfInvestors).then(function (foundElement) {
            expect(foundElement.getText()).toBe('1583');
        });
    },

}
module.exports = mainPageObject;

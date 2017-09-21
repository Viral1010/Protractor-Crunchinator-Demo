var common = {


    waitUntilElementIsDisappear: function (el) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(el), 5000);
    },


    findElement: function (elementPath, doNotScrollIntoView, browsers/*, waitForAngular*/) {
        if (browsers === undefined) {
            var waitForAngular = true;
            if (true === waitForAngular) {

                try {
                    var promise = element(elementPath).getWebElement().then(function (elementFound) {
                        //browser.driver.actions().mouseMove(elementFound).perform();
                        if (!doNotScrollIntoView) {
                            browser.executeScript('arguments[0].scrollIntoView()', elementFound);
                        }
                        return elementFound;          //return the element itself once found
                    });
                    return promise;
                }
                catch (err) {      //Make sure we warn developer that client side is timing out if our test started failing.
                    console.log('Timeouts can be caused by AngularJS services $http and $timeout which fail to complete quick enough.' + err);
                }
            } else {  //Only use this if timeout polling fail -- FALLBACK
                return browser.driver.wait(function () {
                    browser.driver.sleep(2000);  //without angular knowing how long it will take, this will help allow the page to finish loading
                    return browser.driver.findElements(elementPath).then(function () { //wait until a certain element is present
                        var elementFound = browser.driver.findElement(elementPath);
                        return elementFound;
                    });
                }, 60000);
            }
        } else {
            var waitForAngular = configParams.waitForAngular.angularFlag;
            if (true === waitForAngular) {

                try {
                    var promise = element(elementPath).getWebElement().then(function (elementFound) {
                        //browser.driver.actions().mouseMove(elementFound).perform();
                        if (!doNotScrollIntoView) {
                            browsers.executeScript('arguments[0].scrollIntoView()', elementFound);
                        }
                        return elementFound;          //return the element itself once found
                    });
                    return promise;
                }
                catch (err) {      //Make sure we warn developer that client side is timing out if our test started failing.
                    console.log('Timeouts can be caused by AngularJS services $http and $timeout which fail to complete quick enough.' + err);
                }
            } else {  //Only use this if timeout polling fail -- FALLBACK
                return browsers.driver.wait(function () {
                    browsers.driver.sleep(configParams.waitForAngular.angularDelay);  //without angular knowing how long it will take, this will help allow the page to finish loading
                    return browsers.driver.findElements(elementPath).then(function () { //wait until a certain element is present
                        var elementFound = browsers.driver.findElement(elementPath);
                        return elementFound;
                    });
                }, configParams.globalTimeout);
            }
        }


    }
}


module.exports = common
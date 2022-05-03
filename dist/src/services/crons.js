"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const index_1 = require("./meliServices/refreshToken/index");
var jobMeliServicesUpdateOffersFromSellers = new cron_1.CronJob('0 3 * * 6', function () {
    console.log(`${new Date()}: updating offers from sellers`);
    ////Rodar função Update Offers From sellers
    // updateOffersFromSellers();
}, null, true, 'America/Los_Angeles');
var jobGetDailyData = new cron_1.CronJob('30 22 * * *', function () {
    console.log(`${new Date()}: getting daily data from offers`);
    //Rodar função Get Daily Data
}, null, true, 'America/Los_Angeles');
var jobRefreshMeliAcessToken = new cron_1.CronJob('* * * * *', function () {
    console.log(`${new Date()}: refreshing Meli AccessToken`);
    //Rodar função Refresh Token
    (0, index_1.refreshToken)();
}, null, true, 'America/Los_Angeles');
// jobGetDailyData.start();
// jobMeliServicesUpdateOffersFromSellers.start();
// jobRefreshMeliAcessToken.start();

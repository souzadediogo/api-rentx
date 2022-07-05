import { CronJob } from 'cron';
import { getDailyData } from './meliServices/getDailyData/index'
import { refreshToken } from './meliServices/refreshToken/index'
import { updateOffersFromSellers } from './meliServices/updateOffersFromSellers/index'


var jobMeliServicesUpdateOffersFromSellers = new CronJob('0 3 * * 6', function() {       //Runs 3am on sunday '0 3 * * 6'  
    console.log(`${new Date()}: updating offers from sellers`);
    ////Rodar função Update Offers From sellers
    // updateOffersFromSellers();
  }, null, true, 'America/Los_Angeles');
  

var jobGetDailyData = new CronJob('40 00 * * *', function() {                            //Runs 22h30 everyday '0 3 * * 6'  
  console.log(`${new Date()}: getting daily data from offers`);
  //Rodar função Get Daily Data
  }, null, true, 'America/Los_Angeles');

var jobRefreshMeliAcessToken = new CronJob('* * * * *', function() {                     //Runs at minute 0 every hour '0 3 * * 6'  //Everyday at 00:10   ' 0 * * * *'
  console.log(`${new Date()}: refreshing Meli AccessToken`);
  //Rodar função Refresh Token
  refreshToken();
  }, null, true, 'America/Los_Angeles');


jobGetDailyData.start();
jobMeliServicesUpdateOffersFromSellers.start();
jobRefreshMeliAcessToken.start();

import { CronJob } from 'cron';
import { getDailyData } from 'services/meliServices/getDailyData/index'
import { refreshToken } from 'services/meliServices/refreshToken/index'
import { updateOffersFromSellers } from 'services/meliServices/updateOffersFromSellers/index'


var jobMeliServicesUpdateOffersFromSellers = new CronJob('0 3 * * 6', function() {       //Runs 3am on sunday '0 3 * * 6'  
    console.log(`${new Date()}: updating offers from sellers`);
    ////Rodar função Update Offers From sellers
    // updateOffersFromSellers();
  }, null, true, 'America/Los_Angeles');
  

var jobGetDailyData = new CronJob('30 22 * * *', function() {                            //Runs 22h30 everyday '0 3 * * 6'  
  console.log(`${new Date()}: getting daily data from offers`);
  //Rodar função Get Daily Data
  }, null, true, 'America/Los_Angeles');

var jobRefreshMeliAcessToken = new CronJob('* * * * *', function() {                     //Runs at minute 0 every hour '0 3 * * 6'  //Everyday at 00:10   ' 0 * * * *'
  console.log(`${new Date()}: refreshing Meli AccessToken`);
  //Rodar função Refresh Token
  }, null, true, 'America/Los_Angeles');


jobGetDailyData.start();
jobMeliServicesUpdateOffersFromSellers.start();
jobRefreshMeliAcessToken.start();

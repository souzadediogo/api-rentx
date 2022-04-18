import { CronJob } from 'cron';

var job = new CronJob('0 3 * * 6', function() {             //Runs 3am on sunday
    console.log('You will see this message every second');
  }, null, true, 'America/Los_Angeles');
  
  job.start();
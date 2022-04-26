import { CronJob } from 'cron';

var job = new CronJob('0 3 * * 6', function() {             //Runs 3am on sunday '0 3 * * 6'  //Everyday at 00:10   ' 10 0 * * *'
    console.log('You will see this message every second');
  }, null, true, 'America/Los_Angeles');
  
  job.start();



  //JOB: Search seller offers || RUNS: once a week, sunday ate 3am
  
  //JOB: Search daily datapoints || RUNS: once a day, 11pm

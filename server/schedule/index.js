import schedule from 'node-schedule';

function timed(){
    schedule.scheduleJob('*/1 * * * *', function(){
        console.log('The answer to life, the universe, and everything!');
    });
}

export {timed};
import schedule from 'node-schedule';
import getCompetition from './competition1';

function timed(){
    if(process.env.NODE_ENV === 'production'){
        schedule.scheduleJob('*/3 * * * *', function(){
            //getCompetition();
            console.log('competition...');
        });
    }else{
        // schedule.scheduleJob('*/1 * * * *', function(){
        //     // getCompetition();
        //     console.log('competition...');
        // });
    }

}

export {timed};

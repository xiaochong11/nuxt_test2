const KeywordFilter = require('keyword-filter');
import keyArr from './keywords.js'
const filter = new KeywordFilter();

filter.init(keyArr);
function censor(content){
    //超过30长度，删除
    if(content.length>30){
        content = content.substring(0,29)+'...';
    }

    return filter.replaceKeywords(content, '*')
}

export default censor;

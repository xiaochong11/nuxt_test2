const KeywordFilter = require('keyword-filter');
import keyArr from './keywords.js'
const filter = new KeywordFilter();

filter.init(keyArr);
function censor(content,length = 30){
    //超过30长度，删除
    if(content.length>length){
        content = content.substring(0,length)+'...';
    }
    return filter.replaceKeywords(content, '*').replace('<','').replace('>','')
}

export default censor;

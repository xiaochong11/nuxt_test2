import mysql from 'mysql';
import $conf from '../../config/db.js';
let pool  = mysql.createPool($conf.mysql);

export default pool;
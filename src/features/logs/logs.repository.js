const db = require("../../common/db");

async function createLogs() {
    const logs = await db.createCollection('logs',{
        capped:true,
        size: 1024 * 1024,
    }
    );
    return logs;
}
async function checkLog(logData) {
    const logs = await db.collection('logs').findOne(
        {
         logData
        }
    );
    return logs;
}
async  function insertLog(logData) {
    const log = await db.collection('logs').insertOne(
        logData
    );
    return log;
}

module.exports = {
     createLogs,
    checkLog,
    insertLog,
}
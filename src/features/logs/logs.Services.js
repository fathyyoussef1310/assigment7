const logsRepository = require("./logs.repository");
async  function create (DataLog){
    const logExist = await logsRepository.checkLog();
    if(logExist){
        throw new Error("Log already exists");
    }
    const logs = await logsRepository.createLogs()
    return logs;
}
async function insertLog(DataLog){
    const logExist = await logsRepository.checkLog();
    if(logExist){
        throw new Error("Log already exists");
    }
    return await logsRepository.insertLog(DataLog);
}
module.exports = {
    create,
    insertLog,
}
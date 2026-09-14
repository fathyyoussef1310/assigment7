const logServices = require('./logs.Services');

async function createLogs(req, res, next) {
    try {
        await logServices.create(req.body);

        res.status(201).json({
            message: 'Logs collection created successfully',
            status: 'success'
        });

    } catch(err) {
        next(err);
    }
}
async function insertLog(req, res, next) {
    const log = await logServices.insertLog(req.body);
    res.status(201).json({
        message: 'Logs inserted successfully',
        status: 'success',
        data: log
    })
}

module.exports = {
    createLogs,insertLog
};
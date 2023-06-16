const { connection } = require('../../../config/connector');
const mysql = require('../../../models/sql');

module.exports = async (req, res) => {
    try {
        let body = JSON.parse(req.body);

        let sql = `UPDATE suso_user
        SET user_name = '${body['user_name']}'
        , user_email = '${body['user_email']}'
        , user_password = '${body['user_password']}'
        WHERE suso_user_id = '${body['suso_user_id']}' `;
        
        const payload = await mysql.execute_query(sql);
        res.status(200).json({ message: payload });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
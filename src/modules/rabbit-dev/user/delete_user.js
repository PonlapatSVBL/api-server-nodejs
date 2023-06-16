const { connection } = require('../../../config/connector');
const mysql = require('../../../models/sql');

module.exports = async (req, res) => {
    try {
        let body = JSON.parse(req.body);

        let sql = `DELETE
        FROM suso_user
        WHERE suso_user_id = '${body['suso_user_id']}' `;
        
        const payload = await mysql.execute_query(sql);
        res.status(200).json({ message: payload });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
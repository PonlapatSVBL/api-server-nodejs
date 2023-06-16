const { connection } = require('../../../config/connector');
const mysql = require('../../../models/sql');

module.exports = async (req, res) => {
    try {
        let body = JSON.parse(req.body);

        let sql = `SELECT *
        FROM suso_user
        WHERE suso_user_id = '${body['suso_user_id']}' `;
        
        const payload = await mysql.execute_query(sql);
        res.status(200).json({ message: payload });

        /* connection.query(sql, (error, results, fields) => {
            if (error) throw error;
            const payload = results;

            console.log(__dirname);
            res.status(200).json({ message: payload });
        }); */
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
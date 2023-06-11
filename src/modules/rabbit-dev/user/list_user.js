const { connection } = require('../../../config/connector');
const mysql = require('../../../models/sql');

module.exports = async (req, res) => {
    try {
        let sql = "SELECT * FROM sys_user";
        
        const payload = await mysql.findRaw(sql);
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
const { connection } = require('../../../config/connector');
const mysql = require('../../../models/sql');
const generateId10 = require('../../generateId');

module.exports = async (req, res) => {
    try {
        let body = JSON.parse(req.body);
        // console.log(generateId10());

        let sql = `INSERT INTO suso_user
        (suso_user_id, user_name, user_email, user_password, sys_del_flag, created)
        VALUES ('${generateId10()}', '${body['user_name']}', '${body['user_email']}', '${body['user_password']}', 'N', NOW()) `;
        // console.log(sql);
        
        const payload = await mysql.execute_query(sql);
        res.status(200).json({ message: payload });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
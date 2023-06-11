// const sequelize = require('sequelize');
const { connection } = require('../config/connector');
exports.find = (Model, cluase) => {
    return Model.findOne({ where: cluase })

}
exports.findRaw = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, async (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                console.log(results);
                resolve(results);
            }
        });
    })
    /* connection.query(sql, async (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        return await results;
    }); */
}
exports.inSertRaw = (sql) => {
    return connection.query(sql, { type: sequelize.QueryTypes.INSERT });
}
exports.updateRaw = (sql) => {
    return connection.query(sql, { type: sequelize.QueryTypes.UPDATE });
}
exports.deleteRaw = (sql) => {
    return connection.query(sql, { type: sequelize.QueryTypes.DELETE });
}
exports.findAll = (Model, cluase) => {
    return Model.findAll({ where: cluase })
}
exports.findMax = (Model, cluase, col) => {
    return Model.max(col,
        { where: cluase }
    )
}
exports.get = (Model) => {
    return Model.findOne()

}
exports.update = (Model, cluase, data) => {
    return Model.update(data, { where: cluase })

}
exports.create = (Model, data) => {
    return Model.create(data)
}

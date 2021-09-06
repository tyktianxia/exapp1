const { $get, $post } = require("../util/request");

function getOil() {
    return new Promise((resolve, reject) => {
        try {
            const data =  $post("https://wanwuoil.api.bdymkt.com/todayOilPrice/");
            resolve(data)
        } catch (error) {
            return reject(error);
        }
    })
}

module.exports = {
    getOil,
}
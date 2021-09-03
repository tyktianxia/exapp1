const db = require("../util/mysql");

const getUser = async function () {
  try {
    const res = await db.query("select * from user");
    return res;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUser,
};

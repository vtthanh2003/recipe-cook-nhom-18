const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://thanhtanvo:cnCaqYQrQfMGNioPdP3YKHMKTi8RiPS3@dpg-ckbsrfuct0pc7387bgug-a/cookbook_0gbz',
  ssl: {
    rejectUnauthorized: false
}
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};

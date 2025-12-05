// db_config.js
module.exports = {
    // **QUAN TRỌNG: Thay thế bằng Endpoint RDS MySQL của bạn**
    host: 'your-rds-endpoint.us-east-1.rds.amazonaws.com', 
    user: 'admin',      // User name bạn tạo khi tạo RDS
    password: 'your-db-password', // Password bạn tạo khi tạo RDS
    database: 'tuyensinhdb', // Tên Database
    port: 3306
};
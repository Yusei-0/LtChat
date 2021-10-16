module.exports = {
    
    NODE_ENV : process.env.NODE_ENV,
    PORT : process.env.PORT || 4000,
    HOST : process.env.HOST || 'localhost',
    DATABASE_HOST : process.env.DATABASE_HOST || 'localhost',
    DATABASE_PORT : process.env.DATABASE_PORT || '27017',
    DATABASE_NAME : process.env.DATABASE_NAME || 'LtChat_dev',
    DATABASE_USER : process.env.DATABASE_USER || '',
    DATABASE_PASS : process.env.DATABASE_PASS || '', 
    SESSION_KEY: process.env.SESSION_KEY || 'sesionKey'
}
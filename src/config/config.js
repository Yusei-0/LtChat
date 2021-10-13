module.exports = {
    PORT : process.env.PORT || 4000,
    HOST : process.env.HOST || 'localhost',
    DATABASE_HOST : process.env.DATABASE_HOST,
    DATABASE_PORT : process.env.DATABASE_PORT,
    DATABASE_NAME : process.env.DATABASE_NAME ,
    DATABASE_USER : process.env.DATABASE_USER ,
    DATABASE_PASS : process.env.DATABASE_PASS , 
    SESSION_KEY: process.env.SESSION_KEY
}
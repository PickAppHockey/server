
module.exports = {
    connectionString: {
        client: 'pg',
        connection: process.env.DATABASE_URL || {
            host     : '127.0.0.1',
            user     : 'postgres',
            password : 'password',
            database : 'hockeycontext',
            charset  : 'utf8'
        }
    }
}



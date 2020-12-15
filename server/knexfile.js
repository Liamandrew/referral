module.exports = {
    client: "pg",
    connection: {
        database: "referral_db",
        user: "api_user",
        password: "password",
    },
    migrations: {
        directory: "./migrations",
        tableName: "knex_migrations",
    },
};

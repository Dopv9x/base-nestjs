export default () => ({
    port: parseInt(process.env.PORT) || 3000,
    database: {
        dialect: process.env.DB_TYPE ?? "mssql",
        host: process.env.DB_HOST ?? 3306,
        port: process.env.DB_PORT ?? 6000,
        username: process.env.DB_USER ?? 'root',
        password: process.env.DB_PASS ?? '',
        database: process.env.DB_NAME ?? 'base-test',
      }
  });
  
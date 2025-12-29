import { DataSource } from 'typeorm';
import { Article } from './article/entities/article.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest_migration_test',
  synchronize: false,
  logging: true,
  entities: [Article],
  poolSize: 10,
  migrations: ['src/migrations/**.ts'],
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'mysql_native_password',
  },
});

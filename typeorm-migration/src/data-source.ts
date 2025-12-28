import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql", // 数据库类型
  host: "localhost", // 数据库主机
  port: 3306, // 数据库端口
  username: "root", // 数据库用户名
  password: "123456", // 数据库密码
  database: "migration_test", // 数据库名称
  synchronize: false, // 是否自动同步实体到数据库（同步创建表）
  logging: true, // 是否开启日志记录
  entities: [User], // 实体类数组
  migrations: ['./src/migration/**/*.ts'], // 迁移文件数组
  subscribers: [], // 订阅者类数组,比如insert、update、remove 前后可以加入一些逻辑
  poolSize: 10, // 数据库连接池大小
  connectorPackage: "mysql2", // 数据库连接器包
  extra: {
    // 额外的连接参数
    authPlugin: "mysql_native_password", // 适配 Docker MySQL 的认证方式
  },
});

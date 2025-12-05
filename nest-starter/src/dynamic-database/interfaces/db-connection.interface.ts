export interface DynamicDatabaseConnection {
  // 连接数据库
  connect(): Promise<void>;
  // 执行查询
  query(sql: string, params?: any[]): Promise<any>;
  // 执行增删改（返回影响行数）
  execute(sql: string, params?: any[]): Promise<number>;
  // 断开连接
  disconnect(): Promise<void>;
}
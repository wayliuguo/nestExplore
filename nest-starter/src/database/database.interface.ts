export interface DatabaseService {
  connect(): Promise<void>;
  query(sql: string): Promise<any[]>;
  disconnect(): Promise<void>;
}

module.exports = {
  apps: [
    {
      // 主 NestJS 应用进程
      name: 'nest-main',
      // 指向 NestJS 编译后的入口文件
      script: './dist/main.js',
      // 集群模式（NestJS 支持 Cluster 模式，利用多核 CPU）
      exec_mode: 'cluster',
      // 启动与 CPU 核心数一致的实例（或指定数字，如 2）
      instances: 'max',
      // 内存超限重启（根据项目需求调整）
      max_memory_restart: '1G',
      // 环境变量（可覆盖 NestJS 的 .env 文件）
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      // 日志配置（NestJS 的日志可结合 PM2 日志）
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: './logs/nest-main-error.log',
      out_file: './logs/nest-main-out.log',
      // 监控配置（仅监控编译后的 dist 目录和配置文件，避免源码变更触发重启）
      watch: ['./dist', './config'],
      ignore_watch: ['node_modules', 'logs', '*.log'],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
};
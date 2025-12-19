# 阶段1：构建依赖和编译代码（构建阶段）
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（利用 Docker 缓存）
COPY package*.json ./

# 安装所有依赖（包括开发依赖，因为需要 nest build 编译）
RUN npm install

# 复制项目源码
COPY . .

# 编译 NestJS 项目（生成 dist 目录）
RUN npm run build

# 阶段2：生产环境镜像（运行阶段）
FROM node:18-alpine AS production

# 设置工作目录
WORKDIR /app

# 安装 PM2（生产环境需要 PM2 进程管理）
RUN npm install -g pm2

# 从构建阶段复制依赖和编译后的代码
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/ecosystem.config.js ./

# 安装生产依赖（忽略开发依赖，减小镜像体积）
RUN npm install --production

# 创建日志目录（PM2 日志需要写入权限）
RUN mkdir -p /app/logs

# 暴露 NestJS 服务端口（与配置中的 PORT 一致）
EXPOSE 3000

# 用 PM2 启动应用（使用生产环境配置）
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
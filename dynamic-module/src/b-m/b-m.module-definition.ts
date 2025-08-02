import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface BMModuleOptions {
  a: number;
  b: number;
}

// export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
//   new ConfigurableModuleBuilder<BMModuleOptions>().build();

// export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
//   new ConfigurableModuleBuilder<BMModuleOptions>()
//     .setClassMethodName('register')
//     .build();

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE, // 参数类型
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<BMModuleOptions>()
  .setClassMethodName('register') // 设置函数名称
  .setExtras(
    {
      isGlobal: true, // 设置为全局
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .build();

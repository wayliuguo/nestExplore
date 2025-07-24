// 添加空导出，将文件转为模块
export {};

// 扩展 Function 接口以包含 version 属性
declare global {
  interface Function {
    version?: string;
  }
}

// 定义类装饰器
function AddMetadata(constructor: Function) {
  // 添加静态属性
  constructor.version = "1.0.0";
  
  // 添加实例方法
  constructor.prototype.log = function() {
    console.log("这是被装饰器添加的方法");
  };
}

// 为 MyClass 定义接口，包含 log 方法
interface MyClass {
  log(): void;
}

// 使用装饰器
@AddMetadata
class MyClass {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

// 测试
console.log(MyClass.version); // 输出: "1.0.0"
const instance = new MyClass("test");
instance.log(); // 输出: "这是被装饰器添加的方法"
    
// 必须首先导入 reflect-metadata
import 'reflect-metadata';

const obj = {
  a: 1,
  b: 2,
};

function say(prefix) {
  return `${prefix}_${this.name}`;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

class MyClass {
  myMethod() {}
}

Reflect.set(obj, 'c', 3);
console.log(Reflect.get(obj, 'c')); // 3
console.log(Reflect.has(obj, 'c')); // true
console.log(Reflect.apply(say, { name: 'world' }, ['hello'])); // hello_world
console.log(Reflect.construct(Person, ['well', 18])); // Person { name: 'well', age: 18 }

// 为类本身定义元数据
Reflect.defineMetadata('class:version', '1.0.0', MyClass);
// 获取类的方法定义元数据
Reflect.defineMetadata('method:description', '这是一个示例方法', MyClass.prototype, 'myMethod');
// 获取类的元数据
const classVersion = Reflect.getMetadata('class:version', MyClass);
console.log(classVersion); // 输出: "1.0.0"
// 获取方法的元数据
const methodDesc = Reflect.getMetadata('method:description', MyClass.prototype, 'myMethod');
console.log(methodDesc); // 输出: "这是一个示例方法"

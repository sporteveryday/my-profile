# 100 道 TypeScript 面试题 + 答案

## 第一部分：基础题（1-30）

### 1. TypeScript 是什么？它与 JavaScript 的关系？（★）

**答案：** TypeScript 是 Microsoft 开发的 JavaScript 超集，添加了静态类型系统、接口、泛型等特性。编译后生成纯 JavaScript，可运行在任何 JS 环境。
> **解析：** TS 解决了 JS 的类型不安全问题，减少运行时错误 70%+。

### 2. 如何安装 TypeScript？（★）

**答案：** `npm install -g typescript`（全局），或 `npm install --save-dev typescript`（项目）。用 `npx tsc --init` 生成 `tsconfig.json`。
> **解析：** 2025 年推荐项目级安装，避免版本冲突。

### 3. 什么是基本类型？举例 number、string、boolean。（★）

**答案：** TS 的基本类型包括 number、string、boolean 等。

```typescript
let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;
```

### 4. 数组类型如何声明？（★）

**答案：** `number[]` 或 `Array<number>`。
> **解析：** `number[]` 更简洁，`Array` 泛型更灵活。

### 5. 元组（Tuple）是什么？（★）

**答案：** 固定长度、固定类型的数组。

```typescript
let tuple: [string, number] = ["hello", 10];
```

### 6. 枚举（Enum）的作用？（★）

**答案：** 定义一组命名常量。

```typescript
enum Color { Red, Green, Blue } // 默认 0,1,2
let c: Color = Color.Green; // 1
```

### 7. any 类型与 unknown 的区别？（★）

**答案：** `any` 允许任意操作；`unknown` 更安全，必须先类型缩小（如 `typeof` 检查）。推荐 `unknown`。
> **解析：** `any` 绕过类型检查，易引入 bug。

### 8. never 类型何时用？（★）

**答案：** 表示永不返回的函数，如抛错。

```typescript
function fail(): never { throw new Error("Error"); }
```

### 9. void 类型是什么？（★）

**答案：** 表示无返回值。

```typescript
function log(): void { console.log("hi"); }
```

### 10. null 与 undefined 的类型？（★）

**答案：** 可显式声明 `let n: null = null;`。在 `strictNullChecks` 下，不能赋值给其他类型。

### 11. Symbol 类型的作用？（★）

**答案：** 创建唯一标识符，避免属性名冲突。

```typescript
const sym = Symbol("key");
```

### 12. Object 类型如何声明？（★）

**答案：** `let obj: object = {};` 或具体接口 `{ name: string; }`。

### 13. bigint 类型？（★）

**答案：** 大整数。

```typescript
let big: bigint = 100n;
```

### 14. 联合类型（Union）？（★）

**答案：** `string | number`。

```typescript
let id: string | number = "abc";
```

### 15. 类型断言（Type Assertion）？（★）

**答案：** `as` 关键字强制类型。

```typescript
let value = "123" as number; // 编译时转为 number
```

> **解析：** 用 `<number>"123"` 也行，但 JSX 中有冲突。

### 16. 接口（Interface）基础？（★）

**答案：** 定义对象形状。

```typescript
interface Person { name: string; age: number; }
let p: Person = { name: "Bob", age: 25 };
```

### 17. 可选属性（?）？（★）

**答案：** `age?: number;` 表示可选。

### 18. 只读属性（readonly）？（★）

**答案：** `readonly id: number;` 不可修改。

### 19. 索引签名？（★）

**答案：** `[key: string]: any;` 允许动态属性。

### 20. 函数类型声明？（★）

**答案：** `(x: number) => string`。

### 21. 函数参数默认值？（★）

**答案：**

```typescript
function greet(name: string = "World") {}
```

### 22. 可选参数？（★）

**答案：** `lastName?: string`。

### 23. 函数重载？（★）

**答案：** 多签名同一函数。

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
```

### 24. 类型别名（Type Alias）？（★）

**答案：** `type ID = string | number;`

### 25. interface 与 type 的区别？（★）

**答案：** `interface` 适合对象、可扩展；`type` 更灵活（联合、元组）。`interface` 可合并声明。

### 26. 交叉类型（Intersection）？（★）

**答案：** `TypeA & TypeB` 合并属性。

### 27. 字面量类型？（★）

**答案：** `"success" | "error"` 限制具体值。

### 28. 类型保护（Type Guard）？（★）

**答案：**

```typescript
function isString(x: any): x is string { return typeof x === "string"; }
```

### 29. 非空断言（!）？（★）

**答案：** `element!.innerHTML` 告诉 TS 非 null。

### 30. 严格模式（strict）的作用？（★）

**答案：** `tsconfig.json` 中开启，强制类型安全。

---

## 第二部分：中级题（31-60）

### 31. 泛型（Generics）基础？（★★）

**答案：** 参数化类型。

```typescript
function identity<T>(arg: T): T { return arg; }
```

### 32. 泛型约束（extends）？（★★）

**答案：** `T extends { length: number }` 限制 T 有 length。

### 33. 泛型接口？（★★）

**答案：** `interface Box<T> { value: T; }`

### 34. 泛型类？（★★）

**答案：** `class Stack<T> { push(item: T) {} }`

### 35. Partial<T> 工具类型？（★★）

**答案：** 所有属性变可选。

```typescript
Partial<{a: string}> // { a?: string }
```

### 36. Required<T>？（★★）

**答案：** 所有属性变必选。

### 37. Readonly<T>？（★★）

**答案：** 所有属性变只读。

### 38. Pick<T, K>？（★★）

**答案：** 挑选属性。

```typescript
Pick<{a:1,b:2}, 'a'> // {a:1}
```

### 39. Omit<T, K>？（★★）

**答案：** 删除属性。

### 40. Record<K, T>？（★★）

**答案：**

```typescript
Record<string, number> // { [key: string]: number }
```

### 41. Exclude<T, U>？（★★）

**答案：** 从 T 排除 U 的类型。

### 42. Extract<T, U>？（★★）

**答案：** 从 T 提取 U 的类型。

### 43. NonNullable<T>？（★★）

**答案：** 排除 null/undefined。

### 44. Parameters<T>？（★★）

**答案：** 函数参数元组类型。

### 45. ReturnType<T>？（★★）

**答案：** 函数返回值类型。

### 46. InstanceType<T>？（★★）

**答案：** 构造函数实例类型。

### 47. 条件类型基础？（★★）

**答案：** `T extends U ? X : Y`

### 48. infer 关键字？（★★）

**答案：** 推断类型。

```typescript
type ReturnType<T> = T extends (...args: any) => infer R ? R : any;
```

### 49. 分布式条件类型？（★★）

**答案：** 联合类型自动分布，如 `T[number]`。

### 50. Mapped Types？（★★）

**答案：**

```typescript
{ [P in keyof T]: T[P] }
```

### 51. 模块系统（import/export）？（★★）

**答案：** ES6 风格，TS 支持 CommonJS/ESNext。

### 52. 命名空间（Namespace）？（★★）

**答案：** 组织代码，避免全局污染。已少用，推荐模块。

### 53. 装饰器（Decorator）？（★★）

**答案：** 元编程，`@sealed` 等。需启用 `experimentalDecorators`。

### 54. 类装饰器？（★★）

**答案：** `function sealed(constructor: Function) {}`

### 55. 方法装饰器？（★★）

**答案：** `function log(target: any, key: string, descriptor: PropertyDescriptor) {}`

### 56. 属性装饰器？（★★）

**答案：** `function readonly(target: any, key: string) {}`

### 57. 参数装饰器？（★★）

**答案：** 用于依赖注入等。

### 58. 抽象类（Abstract Class）？（★★）

**答案：**

```typescript
abstract class Animal { abstract move(); }
```

### 59. 访问修饰符（public/private/protected）？（★★）

**答案：** `private` 仅类内；`protected` 子类可见。

### 60. 静态成员（static）？（★★）

**答案：** `static count = 0;`

---

## 第三部分：高级题（61-80）

### 61. DeepReadonly<T> 实现？（★★★）

**答案：**

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
};
```

### 62. DeepPartial<T>？（★★★）

**答案：**

```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
};
```

### 63. PickByType<T, U>？（★★★）

**答案：**

```typescript
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
};
```

### 64. TupleToUnion<T>？（★★★）

**答案：** `type TupleToUnion<T extends any[]> = T[number];`

### 65. UnionToIntersection<T>？（★★★）

**答案：**

```typescript
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends
  (k: infer I) => void ? I : never;
```

### 66. Last<T>（元组最后一个）？（★★★）

**答案：**

```typescript
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
```

### 67. PromiseAll<T>？（★★★）

**答案：**

```typescript
type PromiseAll<T extends any[]> = { [P in keyof T]: Promise<T[P]> }[number];
```

### 68. Typeof keyof typeof？（★★★）

**答案：** 嵌套推断，如 `type Keys = keyof typeof obj;` 获取对象键。

### 69. 模板字面量类型？（★★★）

**答案：** `${string} | "file"` 动态字符串类型。

### 70. 品牌类型（Branded Type）？（★★★）

**答案：** `type UserId = string & { __brand: "UserId" };` 增强类型安全。

### 71. 方差（Covariance/Contravariance）？（★★★）

**答案：** 协变：子类型可赋给父类型；逆变：函数参数逆向。

### 72. 高级类型保护？（★★★）

**答案：** `in` operator、`instanceof` 等。

### 73. 模块增广（Module Augmentation）？（★★★）

**答案：** 扩展第三方库接口，如 Express 的 Request。

### 74. 命名空间合并？（★★★）

**答案：** 多个 interface 同名自动合并。

### 75. 条件类型分布式激活？（★★★）

**答案：** 仅 naked type 时激活，如 `T extends any ? ...`

### 76. infer 在条件中的限制？（★★★）

**答案：** 仅在 true 分支可用。

### 77. 递归条件类型？（★★★）

**答案：** 如 `DeepReadonly` 的嵌套递归。

### 78. 高级泛型：Higher-Kinded Types？（★★★）

**答案：** TS 无原生支持，但可模拟。

### 79. 类型挑战：Length<T>？（★★★）

**答案：**

```typescript
type Length<T extends any[]> = T['length'];
```

### 80. 类型挑战：Flatten<T>？（★★★）

**答案：**

```typescript
type Flatten<T extends any[]> = T extends [infer H, ...infer R] ? H | Flatten<R> : never;
```

---

## 第四部分：React/Next.js 实战题（81-90）

### 81. React FC<Props>？（★★）

**答案：**

```typescript
const Comp: React.FC<Props> = ({ prop }) => <div>{prop}</div>;
```

### 82. useState 类型？（★★）

**答案：**

```typescript
const [state, setState] = useState<string>("");
```

### 83. useReducer Action 类型？（★★）

**答案：** 联合类型，如 `type Action = { type: 'INCR' } | { type: 'DECR' };`

### 84. useRef 类型？（★★）

**答案：** `useRef<HTMLInputElement>(null);`

### 85. Props 扩展？（★★）

**答案：**

```typescript
interface Props extends React.HTMLAttributes<HTMLDivElement> { custom: string; }
```

### 86. Next.js getStaticProps 类型？（★★）

**答案：** `GetStaticProps<{ data: User[] }>`

### 87. React.memo 类型？（★★）

**答案：** `const MemoComp = React.memo(Comp);`

### 88. useEffect 依赖类型？（★★）

**答案：** `useEffect(() => {}, [dep: string]);`

### 89. HOC 类型？（★★）

**答案：**

```typescript
(Comp: React.ComponentType<Props>) => React.ComponentType<NewProps>
```

### 90. Context 类型？（★★）

**答案：**

```typescript
const MyContext = createContext<Value | null>(null);
```

---

## 第五部分：开放题（91-100）

### 91. TS 如何提升代码质量？（★★）

**答案：** 静态检查、IDE 支持、重构安全，减少 bug 70%+。

### 92. TS 在大型项目中的优势？（★★）

**答案：** 类型推断、模块化、可维护性强，适合团队协作。

### 93. TS 与 Flow 的区别？（★★）

**答案：** TS 更强大、生态更好；Flow 更轻量但 Facebook 维护弱。

### 94. TS 性能开销？（★★）

**答案：** 编译时开销，运行时零开销（转 JS）。

### 95. TS 配置最佳实践？（★★）

**答案：** `strict: true`, `target: ES2022`, `module: ESNext`。

### 96. TS 在 Node.js 中的应用？（★★）

**答案：** 类型化 API、Express 路由等，提升后端可靠性。

### 97. TS 泛型的最佳实践？（★★）

**答案：** 用约束避免过度泛化，优先具体类型。

### 98. TS 错误处理？（★★）

**答案：** `never` 类型、try-catch 类型缩小。

### 99. TS 未来趋势（2025）？（★★）

**答案：** 更强类型编程、AI 辅助类型生成、与 WASM 集成。

### 100. 你如何迁移 JS 到 TS？（★★）

**答案：** 逐步：`allowJs: true` → 类型注解 → `strict` 模式 → 重构。

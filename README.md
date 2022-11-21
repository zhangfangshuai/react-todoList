#### 编写React-TodoList的几个注意点

### 编写步骤
1. 拆分组件、实现静态组件
    - 注意：className和style的写法

2. 动态初始化列表，如何确定将数据放在哪个组件的`state`中？
    -- 某个组件使用，放在自身的`state`中;
    -- 某些组件使用，放在他们共同的父组件中；（React官方称之为：状态提升）

3. 关于父子之间通信：
   - 【父组件】给【子组件】传递数据，通过`props`传递
   - 【子组件】给【父组件】传递数据，通过`props`传递，要求父组件提前给子组件传递一个函数

4. 注意`defaultChecked` 和 `checked` 的区别，类似的还有： `defaultValue` 和 `value`
   - `defaultChecked`只会在第一次执行，后续即便数据更新，也不会出发多选框选中或取消选中。

5. 状态在哪里，操作状态的方法就在哪里。

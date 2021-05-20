#简介
 自用的一些小方法(我菜我努力💪!)

#使用
`
import somTools from 'some-tools-npm';
const somTools = require('some-tools-npm');
`

# 1 computedVersion
 对比版本号
`
    somTools.computedVersion("4.1.2.1.3", ">", "4.1.2.1.31")
`
 3个参数都是String 版本号要0.0.0格式

# 2 短小精干 observer
 类似于vue的$on $emit $off

 `
 somTools.observer.$on("say", (message: any) => {
  console.log(message);
 });
 setTimeout(() => {
  somTools.observer.$emit("say", "我今年18岁");
 }, 2000);
 setTimeout(() => {
  somTools.observer.$off("say");
  somTools.observer.$emit("say", "我今年20岁");
 }, 5000);
`
 2秒后打印 我今年18岁 5秒后$off销毁了 就不触发了

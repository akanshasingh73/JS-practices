// 'use strict';
// const obj = {
//   x: 'Akansha',
//   method() {
//     console.log(this.x); //akansha
//     const inner = () => {
//       console.log(this.x);
//     };
//     inner();
//   },
// };
// obj.method();

// function showThis() {
//   console.log(this);
// }
// showThis();

// const module = {
//   x: 42,
//   fn1() {
//     return () => {
//       console.log(this);
//       return () => {
//         console.log(this);
//       };
//     };
//   },
// };
// module.fn1()()();

// function inc() {
//   this.count = (this.count || 0) + 1;
//   return this;
// }
// const a = {};
// const chained = inc.bind(a).bind({ count: 99 });
// chained().chained();
// console.log(a.count);

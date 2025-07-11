let obj = {
  firstName: 'Akansha',
  lastName: 'Singh',
};

function getFullName(city, state, abb) {
  console.log(abb, this.firstName + ' ' + this.lastName, city + ', ' + state);
}

const fullName = getFullName.bind(obj, 'Kanpur', 'Uttar Pradesh');
fullName('Hi');

Function.prototype.mybindFunction = function (...args) {
  originalFn = this;
  params = args.slice(1);

  return function (...callArgs) {
    originalFn.call(args[0], ...params, ...callArgs);
  };
};
// this ====> getFullName
const fullName1 = getFullName.mybindFunction(obj, 'Kanpur', 'Uttar Pradesh');
fullName1('Hi');

let object1 = {
  firstname: 'Ashish',
  lastname: 'Sharma',
};
function printName(state, country) {
  console.log(
    'Hello' +
      ' ' +
      this.firstname +
      ' ' +
      this.lastname +
      ' ' +
      state +
      '  ' +
      country
  );
}
// printName.call(object1, 'delhi', 'india');

object2 = {
  firstname: 'Akansha',
  lastname: 'Singh',
};

// printName.apply(object2, ['uttarpradesh', 'india']);

const output = printName.bind(object2, 'uttarpradesh', 'india');
output();

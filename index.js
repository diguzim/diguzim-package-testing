/**
 * @param  {string} name
 */
function printGreeting(name)
{
  console.log(`Hello ${name}`);
};

const printGreeting = printGreeting;

exports = {
  printGreeting
};

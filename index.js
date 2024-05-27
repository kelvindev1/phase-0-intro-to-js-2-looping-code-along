function writeCards(names, eventName) {
  let thankYouMessages = [];

  if (!Array.isArray(names)) {
    return "Please provide an array of names.";
  }

  names.forEach((name) => {
    let message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  });

  return thankYouMessages;
}
function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int--;
  }
  return int;
}

const nums = countDown(10);
console.log(nums);

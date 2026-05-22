const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hi promise is resolved');
  }, 5000);
});

async function handleFunction() {
  console.log('Function called');
  const data = await promise1;
  console.log(data);
}
handleFunction();

async function fetchData(url) {
  try {
    const res = await fetch(url); // fetch(url) returns a Promise for an HTTP response, so await waits until the request completes and gives you a Response object
    const data = await res.json(); // res.json() returns a Promise that resolves with the parsed JSON body, so await gives you the actual JavaScript data
    console.log(data);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1');

// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers(){
  // Await the response of the fetch call
  const respone = await fetch('https://jsonplaceholder.typicode.com/users');
  
  // Only proceed once its resolved
  const data = await respone.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers()
.then(users => console.log(users))
.catch(err => console.log(err));


  
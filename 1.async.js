const fetch = require('request-promise');

function fetchUser() {
  return new Promise((resolve, reject) => {
    // fetch.get('https://api.github.com/users/superman66')
    // .then((data) => {
    //   resolve(data);
    // }, (error) => {
    //   reject(error);
    // })
    setTimeout(function() {
      resolve({data: 1})
    })
  })
}

function getUserByPromise() {
  fetchUser()
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
}

// getUserByPromise()

// promise的方式虽然解决了callback hell，但是这种充满Promise的then(), 如果处理流程复杂的话，整段代码将充满then，语意化不明显，代码流程不能很好的表示执行流程

function *getUserByGenerator() {
  const user = yield fetchUser();
  return user;
}

// const g = getUserByGenerator();
// const result = g.next().value;
// result.then((data) => {
//   console.log(data)
// })

// generator的方式解决了promise的then()问题，流程更加直观、语意化，但是generator的问题在于，函数的执行需要依靠执行器，每次都需要通过g.next()的方式去进行

// async 方式
async function getUserByAsync() {
  return await fetchUser(); 
}

let u = getUserByAsync();
u.then(data => {
  console.log(data);
})


async function f() {
  return 'hello world';
}

f().then((data) => {
  console.log(data)
})

const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1)
    },time)
  })
}

async function f2() {
  await delay(1000);
  await delay(2000);
  await delay(3000);
  return 'done'
}
f2().then(v => {
  console.log(111)
  console.log(v)
})

async function f3() {
  return await 3;
}
f3().then((data) => {
  console.log(data)
})

let a ;
async function f4() {
  await Promise.rek
}


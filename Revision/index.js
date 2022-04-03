/** @format */

console.log("hello 1");

function cleanRoom(clean) {
  return new Promise((resolve, reject) => {
    if (clean) {
      resolve("cleaned");
    } else {
      reject("not yet");
    }
  });
}

setTimeout(() => {
  console.log("time");
}, 0);

(async () => {
  try {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    const res = await cleanRoom(true);
    console.log(res);
    for (let j = 5; j >= 0; j--) {
      console.log(j);
    }
  } catch (error) {
    console.log(error);
  }
})();

// for (let i = 0; i < 5; i++) {
//   console.log(i, "i");
// }

console.log("hello 2");

// app.js
function asyncTask(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject("Invalid duration");
    } else {
      setTimeout(() => {
        resolve(`Task finished in ${duration} ms`);
      }, duration);
    }
  });
}

async function run() {
  try {
    const result = await asyncTask(2000);
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}

run();

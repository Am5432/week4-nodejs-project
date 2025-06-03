
function readFile(callback) {
  setTimeout(() => {
    callback("Finished reading file.");
  }, 1000);
}

function readFilePromise() {
  return new Promise(resolve => {
    readFile(result => {
      resolve(result);
    });
  });
}

readFilePromise().then(result => console.log(result));

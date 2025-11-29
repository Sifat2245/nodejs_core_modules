const { error } = require("console");
const fs = require("fs");

const content1 = "welcome to my blog. \n node js is awesome!";

try {
  fs.writeFileSync("./output/test-sync.txt", content1);
  console.log("file written synchronously");
} catch (error) {
  console.error(error.message);
}

const content2 = "welcome to my another blog guys, \n asynchronous!!!";

fs.writeFile("./output/test-async.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("file written asynchronously");
  }
});

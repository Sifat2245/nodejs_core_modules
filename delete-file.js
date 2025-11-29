const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("file created");

// if(fs.existsSync('./output/temp.txt')){
//     console.log('file exist!!');

//     fs.unlinkSync('./output/temp.txt')
//     console.log('file deleted');
// }

try {
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
} catch (err) {
  console.log(err.message);
}

fs.writeFile("./output/temp2.txt", "ths is temp 2 file", (err) => {
  if (err) return console.log(err.message);
  console.log("another temp file created");
  fs.unlink("./output/temp2.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted successfully");
    }
  });
});

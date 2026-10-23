// import fs from "fs";
import fs from "fs/promises";

// Read file - async callback
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Read file - sync
// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

// Read file - promise
// fs.readFile("test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Read file - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// Write file - async/await
const writeFile = async () => {
  try {
    await fs.writeFile("test.txt", "hello I am writing to this file");
    console.log("File written to...");
  } catch (error) {
    console.error(error);
  }
};

// Append file = async/await
const appendFile = async () => {
  try {
    await fs.appendFile("test.txt", "\nThis is appended text");
    console.log("File appended to...");
  } catch (error) {
    console.error(error);
  }
};

writeFile();
appendFile();
readFile();

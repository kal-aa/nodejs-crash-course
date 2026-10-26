import url from "url";
import path from "path";

const filePath = "./dir1/dir2/test.txt";

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);

const filepath2 = path.resolve("dir1", "dir2", "test.txt");
const filepath3 = path.join("dir1", "dir2", "test.txt");
console.log("Resolve", filepath2);
console.log("Join", filepath3);

import http from "http";
import url from "url";
import path from "path";
import fs from "fs";

const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const server = new http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const data = fs.readFileSync(
      path.join(__dirname, "public-trial", "index.html"),
      "utf8",
    );

    res.write(data);
    res.end();
  }
});

server.listen(8000, () => console.log("Listening to port 8000"));

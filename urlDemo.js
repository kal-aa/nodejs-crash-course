import url from "url";

const urlString = "https://www.google.com/search?q=helloworld";

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);

// URL Format
console.log(url.format(urlObj));

// imort.meta.url
console.log(import.meta.url);

//fileURLToPath
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get("q"));
console.log(urlObj.searchParams.get("q"));
params.append("limit", "5");
params.delete("q");
console.log(params);

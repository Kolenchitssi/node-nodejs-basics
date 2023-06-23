import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";

const copy = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  try {
    fs.cp(path.join(__dirname, "files"), path.join(__dirname, "files_copy"), {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    console.log("Succcess copy file");
  } catch (error) {
    console.error("Error copy file", error.message);
    throw new Error("Error copy file");
  }
};

await copy();

/*

const __dirname = path.dirname(filename);
равнозначно
  const __dirname = path.join(fileURLToPath(import.meta.url), "..");

console.log(import.meta.url); // file:///D:/RSSchool_NodeJS/node-nodejs-basics/src/fs/copy.js
console.log(__filename, "1"); // D:\RSSchool_NodeJS\node-nodejs-basics\src\fs\copy.js
console.log(__dirname, "2"); // D:\RSSchool_NodeJS\node-nodejs-basics\src\fs
console.log(path.basename(__filename, "3")); // copy.js 

    // fs.copyFile(
    //   path.join(__dirname, "files"),
    //   path.join(__dirname, "files_copy"),
    //   constants.COPYFILE_EXCL
    // );

*/

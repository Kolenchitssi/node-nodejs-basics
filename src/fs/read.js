import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  // Write your code here
  const fileName = "fileToRead.txt";
  const fileUrl = path.join(__dirname, "files", fileName);
  try {
    const content = await readFile(fileUrl, "utf-8");
    console.log(content);
  } catch (error) {
    throw new Error("Error read file");
  }
};

await read();

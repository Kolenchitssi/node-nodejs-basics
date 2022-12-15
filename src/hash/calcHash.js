import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const ALGORITM = "sha256";
  const ENCODING = "hex";
  const filepath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const file = await readFile(filepath, "utf8"); //можно и без utf8 ложить просто буфер

  const hash = createHash(ALGORITM).update(file).digest(ENCODING);
  console.log(hash);
};

await calculateHash();

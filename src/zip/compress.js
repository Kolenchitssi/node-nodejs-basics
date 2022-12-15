import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream, write } from "node:fs";
import { filePath, compressedFilePath } from "./variables.js";
import { pipeline } from "node:stream/promises";

const compress = async () => {
  const readStream = createReadStream(filePath);
  const gzip = createGzip();
  const writeStream = createWriteStream(compressedFilePath);
  pipeline(readStream, gzip, writeStream);
};

await compress();

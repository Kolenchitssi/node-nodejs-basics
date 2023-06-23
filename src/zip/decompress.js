import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { compressedFilePath, uncompressedFilePath } from "./variables.js";
import { pipeline } from "node:stream/promises";

const decompress = async () => {
  const readStream = createReadStream(compressedFilePath);
  const unzip = createUnzip();
  const writeStream = createWriteStream(uncompressedFilePath);
  pipeline(readStream, unzip, writeStream);
};

await decompress();

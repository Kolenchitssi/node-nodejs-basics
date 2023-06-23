import * as fsPromises from "node:fs/promises";

const rename = async () => {
  // Write your code here
  try {
    await fsPromises.rename(
      "./files/wrongFilename.txt",
      "./files/wrongFilename.md"
    );
    console.log("Success rename file");
  } catch (error) {
    console.error("Error rename file", error.message);
    throw new Error("Error rename file");
  }
};

await rename();

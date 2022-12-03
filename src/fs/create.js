import { writeFile } from "node:fs/promises";

const create = async () => {
  // Write your code here
  try {
    await writeFile("./files/fresh.txt", "I am fresh and young");
    console.log("Success create file");
  } catch (error) {
    console.error("Error create file", error.message);
  }
};

await create();

import { writeFile } from "node:fs/promises";

const create = async () => {
  // Write your code here

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filepath = path.join(__dirname, "files", "fresh.txt");
  try {
    await writeFile(filepath, "I am fresh and young", {
      flag: "wx",
    });
    console.log("Success create file");
  } catch (error) {
    console.error(error);
    throw new Error("Error create file!!!");
  }
};

await create();

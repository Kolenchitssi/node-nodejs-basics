import { fileURLToPath } from "node:url";
import path from "path";

const list = async () => {
  // Write your code here
  const __dirname = path.join(fileURLToPath(import.meta.url));
  console.log(__dirname);
  console.log(path.basename(__dirname));
};

await list();

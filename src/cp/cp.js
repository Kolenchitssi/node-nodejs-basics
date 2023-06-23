import { fork } from "node:child_process";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { stdout, exit, stdin } from "node:process";

const __dirname = fileURLToPath(import.meta.url);

const spawnChildProcess = async (args) => {
  const filesDirectory = "../files";
  const fileName = "script.js";
  const filePath = join(__dirname, filesDirectory, fileName);
  const childProcess = fork(filePath, args, { silent: true });

  stdin.on("data", (data) => {
    childProcess.send(data.toString());
  });

  childProcess.on("message", (msg) => {
    stdout.write(msg);
    exit();
  });
};

spawnChildProcess();

import fs from "fs";
const write = async () => {
  const writableStream = fs.createWriteStream(
    "./src/streams/files/fileToWrite.txt"
  );
  process.stdin.pipe(writableStream, { flags: "a" }); // чтобы не перезаписывало а добавляло {flags: 'a'}
};

write();

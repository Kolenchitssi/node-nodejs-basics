const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  let numberIteration = 1;
  for (let i = 0; i < args.length; i += 2) {
    args[i] =
      numberIteration === 1 ? `propName is` : `prop${numberIteration}Name is`;
    numberIteration++;
  }
  const result = args.join(" ");
  console.log(result);
};

parseArgs();

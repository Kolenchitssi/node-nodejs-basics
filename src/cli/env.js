const parseEnv = () => {
  // Write your code here

  for (let key in process.env) {
    if (key.startsWith("RSS_")) {
      console.log(key + "=" + process.env[key]);
    }
  }
};

parseEnv();

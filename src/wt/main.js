import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const performCalculations = async () => {
  const workerPath = "./src/wt/worker.js";
  const cpuQty = cpus().length;
  const createWorkerRuns = () => {
    const promiseArray = [];
    let dataForWorker = 10;
    for (let i = 0; i < cpuQty; i++) {
      const worker = new Worker(workerPath, { workerData: dataForWorker });
      promiseArray.push(
        new Promise((resolve, reject) => {
          worker.on("message", (data) => {
            const successResponse = { data, status: "resolved" };
            resolve(successResponse);
          });
          worker.on("error", (err) => {
            const failedResponse = { data: null, status: "error" };
            reject(failedResponse);
          });
        })
      );
      dataForWorker++;
    }
    return promiseArray;
  };
  Promise.all(createWorkerRuns()).then((responses) => {
    console.log(responses);
  });
};

await performCalculations();

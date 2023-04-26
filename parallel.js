const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);
  // Fork workers
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died.`);
    console.log(`Let's fork another worker.`);
    cluster.fork();
  });
} else {
  let count = 0;
  for (let  i = 0; i < 5000000000; i++) {
    count += i;
  }
  console.log(`Final count: ${count}`);
}

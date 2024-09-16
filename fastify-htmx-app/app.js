const fastify = require("fastify")({ logger: true });
const path = require("path");

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
  root: path.join(__dirname, "views"),
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

fastify.get("/", async (request, reply) => {
  return reply.view("index.ejs");
});

function createDelayResponse(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

fastify.get("/new-content", async (request, reply) => {
  await createDelayResponse(800);
  return reply.send("<input type='color' value='#f82506'>Hi there</input>");
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server is running at ${address}`);
});

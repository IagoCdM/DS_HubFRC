import Fastify from "fastify";
import pg from "pg";
import 'dotenv/config';

const fastify = Fastify({ logger: true})
const {Pool} = pg;

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
});

fastify.get('/api/status', async (request, reply) => {
  const result = await pool.query('SELECT NOW()');
  return { status: 'Online', db_time: result.rows[0].now };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
  }
};
start();
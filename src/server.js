import Fastify from 'fastify';
import 'dotenv/config';
import inventarioRoutes from './rotas/inventario.js';

const servidor = Fastify({ 
  logger: true 
});

servidor.register(inventarioRoutes);

servidor.get('/', async (request, reply) => {
  return { projeto: "HubFRC API", status: "online" };
});

const start = async () => {
  try {
    await servidor.listen({ port: 3000, host: '0.0.0.0' });
    console.log('🚀 Servidor HubFRC rodando na porta 3000!');
  } catch (err) {
    servidor.log.error(err);
    process.exit(1);
  }
};
start();
import pg from 'pg';
const { Pool } = pg;

const sql = new Pool({
  user: 'postgres',
  password: 'senai',
  host: 'localhost',
  port: 5432,
  database: 'HubFRC'
});

export default async function inventarioRoutes(servidor, options) {
  
  servidor.post('/api/inventario', async (request, reply) => {
    const { nome, fabricante, quantidade_atual, quantidade_min, localizacao } = request.body;
    try {
      const queryText = `
        INSERT INTO componentes_cots (nome, fabricante, quantidade_atual, quantidade_min, localizacao)
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *
      `;
      const values = [nome, fabricante, quantidade_atual, quantidade_min, localizacao];
      const result = await sql.query(queryText, values);
      return reply.code(201).send({
        message: 'Componente cadastrado com sucesso!',
        item: result.rows[0]
      });
    } catch (error) {
      servidor.log.error(error);
      return reply.code(500).send({ error: 'Erro interno ao inserir componente.' });
    }
  });

  servidor.get('/api/inventario', async (request, reply) => {
    try {
      const result = await sql.query('SELECT * FROM componentes_cots ORDER BY id ASC');
      return reply.code(200).send(result.rows);
    } catch (error) {
      servidor.log.error(error);
      return reply.code(500).send({ error: 'Erro interno ao buscar componentes.' });
    }
  });

  servidor.get('/api/inventario/:id', async (request, reply) => {
    const { id } = request.params;
    try {
      const result = await sql.query('SELECT * FROM componentes_cots WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return reply.code(404).send({ error: 'Componente COTS não encontrado.' });
      }
      return reply.code(200).send(result.rows[0]);
    } catch (error) {
      servidor.log.error(error);
      return reply.code(500).send({ error: 'Erro interno ao buscar o componente.' });
    }
  });

  servidor.put('/api/inventario/:id', async (request, reply) => {
    const { id } = request.params;
    const { nome, fabricante, quantidade_atual, quantidade_min, localizacao } = request.body;
    try {
      const queryText = `
        UPDATE componentes_cots 
        SET nome = $1, fabricante = $2, quantidade_atual = $3, quantidade_min = $4, localizacao = $5
        WHERE id = $6
        RETURNING *
      `;
      const values = [nome, fabricante, quantidade_atual, quantidade_min, localizacao, id];
      const result = await sql.query(queryText, values);
      if (result.rows.length === 0) {
        return reply.code(404).send({ error: 'Componente COTS não encontrado para atualização.' });
      }
      return reply.code(200).send({
        message: 'Componente atualizado com sucesso!',
        item: result.rows[0]
      });
    } catch (error) {
      servidor.log.error(error);
      return reply.code(500).send({ error: 'Erro interno ao atualizar o componente.' });
    }
  });

  servidor.delete('/api/inventario/:id', async (request, reply) => {
    const { id } = request.params;
    try {
      const result = await sql.query('DELETE FROM componentes_cots WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return reply.code(404).send({ error: 'Componente COTS não encontrado para exclusão.' });
      }
      return reply.code(200).send({
        message: 'Componente deletado com sucesso!',
        item: result.rows[0]
      });
    } catch (error) {
      servidor.log.error(error);
      return reply.code(500).send({ error: 'Erro interno ao deletar o componente.' });
    }
  });

}
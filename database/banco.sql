CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    subequipe VARCHAR(50) NOT NULL
);
CREATE TABLE componentes_cots (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    fabricante VARCHAR(100) NOT NULL,
    quantidade_atual INT NOT NULL,
    quantidade_min INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    cadastrado_por_id INT REFERENCES usuarios(id) ON DELETE SET NULL
);
CREATE TABLE tarefas_kanban (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    status VARCHAR(30) NOT NULL DEFAULT 'Backlog',
    responsavel_id INT REFERENCES usuarios(id) ON DELETE SET NULL,
    data_criacao TIMESTAMP DEFAULT NOW()
);
CREATE TABLE pedidos_compra (
    id SERIAL PRIMARY KEY,
    item_nome VARCHAR(150) NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    valor_estimado DECIMAL(10, 2) NOT NULL,
    status_aprovacao VARCHAR(30) NOT NULL DEFAULT 'Pendente', -- 'Pendente', 'Aprovado', 'Rejeitado'
    solicitante_id INT REFERENCES usuarios(id) ON DELETE SET NULL,
    data_solicitacao TIMESTAMP DEFAULT NOW()
);
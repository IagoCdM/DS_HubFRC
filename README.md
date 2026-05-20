# HubFRC - Sistema Integrado de Gestão para Equipes de Robótica

## Descrição do Problema e Solução
O desenvolvimento de robôs de alta performance para a *FIRST Robotics Competition* (FRC) exige sincronia perfeita entre subequipes de mecânica, programação, negócios e mentoria. Atualmente, muitas equipes sofrem com a descentralização de informações, controle ineficiente de estoques de peças de alto custo e falhas crônicas de comunicação interna — cenários agravados pela curtíssima e intensa janela de tempo conhecida como *Build Season*.

O **HubFRC** surge como uma plataforma centralizada para solucionar essa dor. O sistema atua como um hub integrado focado em três pilares principais:
1. **Controle Rigoroso de Inventário:** Rastreamento de componentes COTS (Commercial Off-The-Shelf), ferramentas e alertas automáticos de estoque mínimo.
2. **Gestão Ágil de Tarefas:** Um quadro visual estilo Kanban mapeando o progresso das atividades de cada subequipe.
3. **Saúde Financeira:** Mapeamento de fluxo de caixa, controle de patrocínios e funil de pedidos de compra para aprovação dos mentores.

Adicionalmente, a plataforma oferece um módulo de *Scouting*, permitindo a coleta e análise centralizada de dados de robôs adversários durante as competições regionais e mundiais.

---

## Tecnologias Pretendidas

Abaixo estão listadas as tecnologias propostas para o ecossistema de desenvolvimento do projeto (ajuste conforme a stack do seu curso):

* **Frontend:** HTML5, CSS3, JavaScript / React.js (Interface responsiva para uso em notebooks nas oficinas e celulares nas competições).
* **Backend:** Node.js (Express) / Python (FastAPI ou Django) (Para gerenciamento ágil de requisições e regras de negócio).
* **Banco de Dados:** PostgreSQL ou MySQL (Armazenamento relacional robusto para controle das peças do estoque, permissões de usuários e transações financeiras).
* **Controle de Versão:** Git & GitHub.

---

## Estrutura de Branches

O projeto adota o fluxo de ramificação baseado em boas práticas de mercado:
* `main`: Armazena o código de produção estável e homologado.
* `develop`: Branch principal de integração para o desenvolvimento de novas funcionalidades.

---

## Como Contribuir

Os commits deste repositório seguem estritamente a especificação dos **Conventional Commits**:
* `feat:` para novas funcionalidades.
* `fix:` para correção de bugs.
* `chore:` para mudanças de configuração ou ferramentas que não modificam o código de produção.

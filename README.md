# Workshop Zod

Este projeto é para o worshop da Codante sobre Zod, você também pode acompanhar o projeto seguindo o [Guia](https://guias.codante.io/zod/).

## Instalação

Para instalar e rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/mechamobau/codante-zod-workshop.git
   cd codante-zod-workshop
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Abra o navegador e acesse:**
   ```
   http://localhost:5173
   ```

## Estrutura do Projeto

- `src/App.tsx`: Arquivo principal da aplicação que define as rotas e navegação.
- `src/components/`: Contém todos os componentes de formulários e outros componentes reutilizáveis.
- `src/templates/`: Contém templates para geração de novos componentes e schemas.

## Uso

Navegue pelos diferentes formulários através do menu de navegação na parte superior da aplicação. Cada formulário possui validações específicas para os dados inseridos.

## Gerar Novos Componentes

Este projeto utiliza o Plop para gerar novos componentes. Para criar um novo componente, execute o comando abaixo e siga as instruções:

```bash
npm run generate
```

# Game Developer Portfolio

Um portfólio moderno e interativo para desenvolvedores de jogos, com foco em programação e desenvolvimento. Este projeto apresenta um design temático de desenvolvimento de jogos com elementos 3D interativos.

[Preview do portfolio](https://fatec-sjc-dsm-portfolio.github.io/ra1461392111005/)

## 🎮 Características

- **Modelo 3D Interativo**: Exibição de um computador 3D na seção hero
- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Animações Suaves**: Transições e animações para uma experiência de usuário agradável
- **Seções Completas**: Hero, Sobre, Projetos, Habilidades e Contato
- **Estética de Jogos**: Design visual inspirado no mundo dos jogos e programação

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) - Framework React
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - Biblioteca React para Three.js
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript tipado
- [Shadcn/UI](https://ui.shadcn.com/) - Componentes de UI

## 📋 Pré-requisitos

- Node.js 18.0.0 ou superior
- npm ou pnpm ou yarn

## 🛠️ Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/fatec-sjc-dsm-portfolio/ra1461392111005.git
   ```

2. Navegue até o diretório do projeto
   ```bash
   cd ra1461392111005
   ```

3. Instale as dependências
   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   pnpm dev
   # ou
   yarn dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido como parte do portfólio acadêmico - DSM Fatec SJC**

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.idea
.vscode
```

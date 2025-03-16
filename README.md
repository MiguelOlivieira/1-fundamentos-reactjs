<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# Projeto de Aplicação React com Vite

Este repositório contém o projeto desenvolvido durante o curso de React da Rocketseat. O objetivo deste projeto é criar uma aplicação React utilizando o Vite, uma ferramenta moderna e rápida para desenvolvimento de aplicações front-end.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build que proporciona um ambiente de desenvolvimento rápido e eficiente.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade do código e a experiência de desenvolvimento.

## 📚 Conceitos Aprendidos

Durante o desenvolvimento deste projeto, exploramos e aplicamos diversos conceitos fundamentais do React, incluindo:

- **Componentização**: Aprendemos a dividir a aplicação em componentes reutilizáveis, facilitando a manutenção e a escalabilidade do código.
- **Propriedades (Props)**: Compreendemos como passar dados entre componentes, permitindo que eles se comuniquem de forma eficiente.
- **Estados (State)**: Estudamos como gerenciar o estado da aplicação, permitindo que os componentes respondam a interações do usuário.
- **Imutabilidade**: Discutimos a importância de manter o estado imutável para garantir previsibilidade e facilitar a detecção de mudanças.
- **Hooks**: Aprendemos a utilizar hooks como `useState` e `useEffect` para gerenciar estado e efeitos colaterais em componentes funcionais.

## 🚀 Como Executar o Projeto

Para rodar este projeto em sua máquina local, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto
   ```bash
   cd nome-do-repositorio

4. Instale as dependencias
   ```bash
   npm install

5. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev

7. Acesse a aplicação em seu navegador através do endereço http://localhost:3000.
>>>>>>> c73d82750c4a287e87a8faee064bbe06ea4d0bda

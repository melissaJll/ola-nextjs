# Anotações Gerais sobre o nexxt.js

Next.js é um framework Fullstack que permite xeiar plicações React modernas e ootimizaadas para mecanismos de busca.

Next.js daz a renderização do html bno servidor, ou seja, é `SSR Service Side Rendering`

Para criar e navegar por ´~aginas no diretorio `pages` que automaticamente ekas estarão disponiveis oaea bavegaçã o atraves de rotas.

## Sobre o \_app.js e \_document.js

Arquivo de configuração Global para personalizar o comportamento da aplicação Next.js

### \_app

- Adicionar componentes globais ao app
- Tem uma finalidade semelhante ao App.js ou index.js do React
- Renderizado no Client e no Server

### \_document.js

- Usado para personalizar HTML de todas as páginas em relação ao <head>
- Pode ser usado para meta tags, scripts, estilos globais
- É carregado no servidor na renderização inicial

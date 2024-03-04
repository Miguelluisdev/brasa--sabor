# React + TypeScript + Vite



  <h1>Brasa&Sabor </h1>

  <p>Bem-vindo ao front-end do projeto Brasa&Sabor Este repositório contém o código fonte e os recursos relacionados à interface do usuário do projeto.</p>

  <h2>Tecnologias Utilizadas</h2>

  <p>O front-end do projeto Proben foi desenvolvido utilizando as seguintes tecnologias e ferramentas:</p>

  <ul>
    <li>React.js:  React com suporte a TypeScript.</li>
    <li>TypeScript: Um superset de JavaScript que adiciona tipagem estática à linguagem. O TypeScript melhora a manutenção do código e fornece autocompletar durante o desenvolvimento.</li>
    <li>Tailwind CSS: Um framework de utilitários CSS. O Tailwind CSS simplifica a estilização da aplicação com a abordagem utility-first, proporcionando flexibilidade e facilidade na criação de estilos customizados.</li>
  </ul>

<h2>Estrutura do Projeto</h2>

<ul>
  <li>public/: Contém arquivos estáticos, como imagens e ícones...</li>
  <li>src/: Contém o código-fonte da aplicação.</li>
  <li>APP/:</li>
  <ul>
    <li>globals.css/: Estilos globais e estilização utilizando Tailwind CSS</li>
    <li>icon.ico/: Favicon do site</li>
    <li>Layout.tsx/: Componentes que representam seções inteiras da aplicação.</li>
    <li>components/: Componentes React reutilizáveis.</li>
    <li>forms/: Componentes reutilizáveis, como input, select...</li>
    <li>layout/: Componentes responsável pela maior parte dos espaçamentos que garante uma boa responsividade.</li>
    <li>libs/: Utilitários e funções auxiliares.</li>
    <li>features/:</li>
    <ul>
      <li>login/:</li>
      <ul>
        <li>Login.tsx: Componente para o sistema de login.</li>
        <li>AuthService.ts: Serviço para gerenciar o login e a autenticação.</li>
      </ul>
      <li>registro/:</li>
      <ul>
        <li>Registro.tsx: Componente para o sistema de cadastro.</li>
        <li>UserApiService.ts: Serviço para interagir com a API de registro de usuários.</li>
      </ul>
      <li>verificação/:</li>
      <ul>
        <li>Verificação.tsx: Componente para a verificação simples de login.</li>
        <li>AuthCheckService.ts: Serviço para verificar o status de autenticação.</li>
      </ul>
      <li>api/:</li>
      <ul>
        <li>viacepApiService.ts: Serviço para interagir com a API ViaCEP.</li>
        <li>jsonServerApiService.ts: Serviço para interagir com a API JSON Server.</li>
        <li>unsplashApiService.ts: Serviço para obter imagens da API Unsplash.</li>
      </ul>
      <li>localStorageService.ts: Serviço para salvar e recuperar dados do LocalStorage.</li>
      <li>churrascometro/:</li>
      <ul>
        <li>Churrascometro.tsx: Componente para o churrascometro.</li>
        <li>ChurrascoUtils.ts: Utilitário para cálculos relacionados ao churrascometro.</li>
      </ul>
      <li>loja/:</li>
      <ul>
        <li>Loja.tsx: Componente para a loja com sistema de carrinho de compras.</li>
        <li>Carrinho.tsx: Componente para exibir e gerenciar o carrinho de compras.</li>
      </ul>
    </ul>
    <li>páginas/:</li>
    <ul>
      <li>Home.tsx: Página inicial da aplicação.</li>
      <li>ChurrascometroPage.tsx: Página para exibir o churrascometro.</li>
      <li>LoginPage.tsx: Página de login.</li>
      <li>RegistroPage.tsx: Página de registro.</li>
      <li>LojaPage.tsx: Página da loja.</li>
    </ul>
  </ul>
</ul>




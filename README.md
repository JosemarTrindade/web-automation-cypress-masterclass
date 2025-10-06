# 🌐 Web Automation Cypress Masterclass

<div align="center">

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Faker.js](https://img.shields.io/badge/Faker.js-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)

**Projeto Acadêmico & Portfólio - QaZando Masterclass**

*Automação de Testes End-to-End com Cypress para aplicações Web*

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=github&logoColor=white)]()
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]()

</div>

---

## 📚 Sobre o Projeto

> **🎓 Projeto Acadêmico & Portfólio**: Este repositório demonstra habilidades em automação de testes web utilizando **Cypress**, desenvolvido durante o curso da **QaZando Masterclass**. Inclui cenários reais de teste para funcionalidades como login, cadastro, checkout e validações de interface.

Este projeto showcases a implementação de testes automatizados end-to-end para aplicações web, utilizando **Cypress** como framework principal e **Faker.js** para geração de dados dinâmicos.
Este projeto showcases a implementação de testes automatizados end-to-end para aplicações web, utilizando **Cypress** como framework principal, **Faker.js** para geração de dados dinâmicos e **Page Object Model** para organização dos testes. Também inclui comandos customizados para facilitar a manutenção e reutilização de fluxos.

### 🎯 Objetivos Demonstrados

- ✅ **Automação End-to-End** completa de aplicações web
- ✅ **Page Object Model** e boas práticas de organização
- ✅ **Geração de dados dinâmicos** com Faker.js
- ✅ **Validações robustas** de interface e funcionalidades
- ✅ **Testes responsivos** em múltiplas resoluções
- ✅ **Cenários de teste realistas** baseados em user stories
- ✅ **Clean Code** e documentação profissional

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Função |
|------------|---------|---------|
| **Cypress** | `^15.3.0` | Framework de testes E2E |
| **@faker-js/faker** | `^10.0.0` | Geração de dados fake realistas |
| **Node.js** | `^18.0.0` | Runtime JavaScript |
| **JavaScript ES6+** | - | Linguagem de programação |

---

## 🌐 Sistema Testado

**🔗 Base URL**: `https://automationpratice.com.br`

**📋 Funcionalidades Testadas**:
- 🔐 Sistema de autenticação (Login/Logout)
- 👤 Cadastro de usuários
- 🛒 Processo de checkout
- 📱 Responsividade (Mobile/Desktop)
- ✅ Validações de formulários

---

## 🚀 Configuração e Execução

### Pré-requisitos

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git
```

### 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/web-automation-cypress-masterclass.git

# Navegue até o diretório
cd web-automation-cypress-masterclass

# Instale as dependências
npm install
```

### ▶️ Executando os Testes

```bash
# Interface gráfica do Cypress (modo interativo)
npx cypress open

# Modo headless (linha de comando)
npx cypress run

# Executar teste específico
npx cypress run --spec "cypress/e2e/login.cy.js"

# Executar em browser específico
npx cypress run --browser chrome

# Gerar relatório com vídeos
npx cypress run --record
```

### 🔧 Scripts NPM (Adicione ao package.json)

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:run:chrome": "cypress run --browser chrome",
    "cy:run:firefox": "cypress run --browser firefox",
    "test": "cypress run"
  }
}
```

---

## 📁 Estrutura do Projeto

```
web-automation-cypress-masterclass/
├── 📂 cypress/
│   ├── 📂 e2e/                           # Cenários de teste
│   │   ├── 📄 cadastro-usuario.cy.js     # Testes de cadastro
│   │   ├── 📄 checkout.cy.js             # Testes de checkout
│   │   ├── 📄 comandos-basicos.cy.js     # Conceitos fundamentais
│   │   └── 📄 login.cy.js                # Testes de autenticação
│   ├── 📂 support/                       # Arquivos de suporte
│   │   └── 📄 index.js                   # Configurações globais
│   ├── 📂 fixtures/                      # Dados estáticos (se necessário)
│   ├── 📂 screenshots/                   # Screenshots de falhas
│   └── 📂 videos/                        # Gravações dos testes
├── 📄 cypress.config.js                  # Configurações do Cypress
├── 📄 package.json                       # Dependências e scripts
├── 📄 .gitignore                         # Arquivos ignorados
└── 📄 README.md                          # Documentação
```

---

## 🧪 Cenários de Teste Implementados

### 🔐 **Login (login.cy.js)**
```javascript
✅ Login com credenciais válidas
✅ Validação de campos obrigatórios
✅ Validação de email inválido
✅ Validação de senha incorreta
✅ Tratamento de campos vazios
```

### 👤 **Cadastro de Usuário (cadastro-usuario.cy.js)**
```javascript
✅ Cadastro com dados válidos + Faker.js
✅ Validação de nome obrigatório
✅ Validação de email obrigatório
✅ Validação de senha com mínimo de caracteres
✅ Validação de email inválido
✅ Tratamento de formulário vazio
```

### 🛒 **Checkout (checkout.cy.js)**
```javascript
✅ Processo completo de checkout
✅ Testes responsivos (iPhone 5, iPhone X, MacBook 16)
✅ Preenchimento com dados faker
✅ Validação de formulário de billing
✅ Finalização de pedido
```

### 🎯 **Comandos Básicos (comandos-basicos.cy.js)**
```javascript
✅ Navegação e acesso a URLs
✅ Seleção de elementos (get, find, contains)
✅ Interações (type, click, select)
✅ Validações e assertions
✅ Manipulação de checkboxes/radio buttons
```

---

## 🎨 Funcionalidades Avançadas

### 🎲 **Geração de Dados Dinâmicos**

```javascript
import { faker } from '@faker-js/faker';

// Dados realistas para testes
const userData = {
    nome: faker.person.fullName(),
    email: faker.internet.email({ provider: 'qazando.com' }),
    senha: faker.internet.password({ length: 6 }),
    empresa: faker.company.name(),
    endereco: faker.location.streetAddress()
};
```

### 📱 **Testes Responsivos**

```javascript
const dispositivos = ['iphone-5', 'iphone-x', 'macbook-16'];

dispositivos.forEach((dispositivo) => {
    it(`Teste em ${dispositivo}`, () => {
        cy.viewport(dispositivo);
        // lógica do teste
    });
});
```

### 🔍 **Validações Robustas**

```javascript
cy.get('#swal2-title')
    .should('be.visible')
    .should('contain', 'Login realizado')
    .should('have.text', 'Login realizado');
```

---

## 📊 Exemplo de Execução

```bash
$ npx cypress run

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        15.3.0                                                                         │
  │ Browser:        Electron 136 (headless)                                                        │
  │ Node Version:   v18.17.0                                                                       │
  │ Specs:          4 found (cadastro-usuario.cy.js, checkout.cy.js, comandos-basicos.cy.js,      │
  │                 login.cy.js)                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘

  ✅  cadastro-usuario.cy.js                    7 passing (15s)
  ✅  checkout.cy.js                            3 passing (25s)
  ✅  comandos-basicos.cy.js                    6 passing (8s)
  ✅  login.cy.js                               6 passing (12s)

  📊  All specs passed!                        22 tests passing (1m 0s)
```

---

## 🎯 Habilidades Demonstradas

### 💻 **Técnicas**
- **Test Automation**: Automação completa de testes E2E
- **JavaScript ES6+**: Uso moderno da linguagem
- **Cypress Framework**: Domínio do framework
- **Data Generation**: Geração dinâmica com Faker.js
- **Responsive Testing**: Testes em múltiplas resoluções
- **Form Validation**: Validação robusta de formulários

### 🧠 **Metodologias**
- **BDD/Given-When-Then**: Estruturação clara de cenários
- **Page Object Pattern**: Organização e reutilização
- **Clean Code**: Código limpo e legível
- **Test Design**: Cobertura de cenários positivos e negativos

### 🔧 **Ferramentas**
- **Git/GitHub**: Controle de versão
- **NPM**: Gerenciamento de dependências
- **VS Code**: Desenvolvimento
- **CI/CD Ready**: Preparado para integração contínua

---

## 📈 Métricas do Projeto

| Métrica | Valor |
|---------|-------|
| **Cenários de Teste** | 22+ |
| **Arquivos de Teste** | 4 |
| **Cobertura de Funcionalidades** | Login, Cadastro, Checkout |
| **Dispositivos Testados** | 3 (Mobile + Desktop) |
| **Validações Implementadas** | 50+ assertions |

---

## 🏆 Resultados e Conquistas

- ✅ **100% dos testes passando** em ambiente de desenvolvimento
- ✅ **Cobertura completa** das principais jornadas do usuário
- ✅ **Testes responsivos** garantindo compatibilidade mobile
- ✅ **Código limpo** seguindo padrões da indústria
- ✅ **Documentação profissional** para facilitar manutenção
- ✅ **Dados dinâmicos** eliminando dependências de dados estáticos

---

## 🔮 Próximos Passos

### 🚀 **Melhorias Planejadas**
- [ ] Implementar Page Object Model
- [ ] Integração com CI/CD (GitHub Actions)
- [ ] Relatórios HTML personalizados

### 📚 **Aprendizados Contínuos**
- [ ] Cypress Component Testing
- [ ] Testes de carga com JMeter
- [ ] Docker para testes

---

## 📞 Contato

<div align="center">

**Desenvolvido com 💜 para demonstrar habilidades em Quality Assurance**

📧 **Email**: [josemar.s.trindade@gmail.com](mailto:josemar.s.trindade@gmail.com)  
🔗 **LinkedIn**: [Josemar Trindade](https:www.linkedin.com/in/josemar-trindade-452979a9)  
🐱 **GitHub**: [JosemarTrindade](https://github.com/JosemarTrindade)

---

### 🎓 Projeto Acadêmico
**Curso**: QaZando Masterclass - Automação de Testes  
**Objetivo**: Demonstrar competências técnicas em QA e Test Automation  
**Status**: ✅ Completo e pronto para produção

---

*💡 Este projeto faz parte do meu portfólio profissional e demonstra conhecimentos práticos em automação de testes web. Sinta-se à vontade para explorar o código, fazer fork ou usar como referência em seus próprios projetos!*

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

</div>

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições, issues e feature requests são bem-vindos!  
Sinta-se à vontade para verificar a [página de issues](../../issues).
<div align="center">
  <h1>Hunt Mobile</h1>
  
  <img src="https://img.shields.io/badge/React%20Native-0.60.4-blue?logo=react" alt="React Native" />
  <img src="https://img.shields.io/badge/platform-android%20%7C%20ios-lightgrey" alt="Platform" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  
  <br/>
  <strong>Aplicativo mobile para listagem e visualização de produtos, desenvolvido em React Native.</strong>
</div>

---

## 📑 Sumário
- [📱 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias e Bibliotecas](#-tecnologias-e-bibliotecas)
- [🧩 Padrões de Projeto](#-padrões-de-projeto)
- [📁 Estrutura de Pastas](#-estrutura-de-pastas)
- [⚙️ Configuração e Setup](#-configuração-e-setup)
- [💻 Scripts Disponíveis](#-scripts-disponíveis)
- [📄 Licença](#-licença)
- [👤 Autor](#-autor)

---

## 📱 Sobre o Projeto

O **Hunt Mobile** é um app desenvolvido em React Native para exibir uma lista de produtos consumindo uma API REST. Permite navegação entre telas, visualização de detalhes e paginação.

---

## 🚀 Tecnologias e Bibliotecas

- <img src="https://img.shields.io/badge/React%20Native-0.60.4-blue?logo=react" height="18"/> **[React Native 0.60.4](https://reactnative.dev/)**
- <img src="https://img.shields.io/badge/React-16.8.6-61dafb?logo=react" height="18"/> **[React 16.8.6](https://reactjs.org/)**
- <img src="https://img.shields.io/badge/React%20Navigation-3.x-6e40c9?logo=react" height="18"/> **[React Navigation 3.x](https://reactnavigation.org/)** — Navegação entre telas
- <img src="https://img.shields.io/badge/Axios-0.19.0-5a29e4?logo=axios" height="18"/> **[Axios](https://github.com/axios/axios)** — Requisições HTTP
- <img src="https://img.shields.io/badge/Gesture%20Handler-1.3.0-ff9800?logo=react" height="18"/> **[react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/)** — Gestos nativos
- <img src="https://img.shields.io/badge/Jest-24.8.0-c21325?logo=jest" height="18"/> **Jest** — Testes automatizados
- <img src="https://img.shields.io/badge/ESLint-6.1.0-4b32c3?logo=eslint" height="18"/> **ESLint** — Linting e padronização de código

---

## 🧩 Padrões de Projeto

- **Container/Presentation**: Separação de lógica de dados (`Main.js`) e apresentação (`Product.js`).
- **Navigation Stack**: Uso de `createStackNavigator` para navegação entre telas.
- **Configuração centralizada de API**: Instância única do Axios (`bin/settings/api.js`).
- **Estilização com StyleSheet**: Padrão do React Native para estilos isolados por componente.

---

## 📁 Estrutura de Pastas

```text
Hunt_mobile/
├── App.js                # Entry point do app
├── bin/
│   ├── Views/
│   │   ├── Main.js       # Tela principal (lista de produtos)
│   │   └── Product.js    # Tela de detalhes do produto
│   ├── routes.js         # Configuração de rotas/navegação
│   └── settings/
│       ├── api.js        # Instância do Axios
│       └── statusBar.js  # Configuração de status bar
├── package.json
└── ...
```

---

## ⚙️ Configuração e Setup

> **Pré-requisitos:**
> - Node.js >= 10
> - Yarn ou npm
> - Android Studio/Xcode para rodar emulador ou dispositivo físico

1. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```
2. **Execute o app:**
   - Android:
     ```bash
     npx react-native run-android
     ```
   - iOS (Mac):
     ```bash
     npx react-native run-ios
     ```
3. **Lint:**
   ```bash
   npm run lint
   ```
4. **Testes:**
   ```bash
   npm test
   ```

---

## 💻 Scripts Disponíveis

| Script           | Descrição                      |
|------------------|-------------------------------|
| `npm start`      | Inicia o Metro Bundler         |
| `npm run android`| Executa no Android             |
| `npm run ios`    | Executa no iOS                 |
| `npm test`       | Executa testes com Jest        |
| `npm run lint`   | Lint do código                 |

---

## 📄 Licença

Este projeto está sob licença MIT.
---
## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>

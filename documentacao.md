# Projeto Expo – Guia de Configuração
Passo a passo para criar e configurar um projeto **Expo** do zero.
---
## **1. Pré-requisitos**
- **Sistema:** Windows, macOS ou Linux  
- **Node.js:** última versão estável (LTS)  
- **Editor:** VS Code (recomendado)  
- **Conta Expo:** opcional, mas necessária para recursos avançados  
## **2. Conferir versões instaladas**
No terminal:
```bash
node -v   # versão do Node.js
npm -v    # versão do npm
npx -v    # versão do npx
```
## **3. Instalar o Node.js**
- Baixe o instalador LTS em nodejs.org
- Execute a instalação
- Feche e reabra o terminal
- Verifique novamente:
```bash
node -v
npm -v
```
## **4. Configurar ambiente Android/iOS**
- Android: instale o Android Studio e crie um emulador no AVD Manager
- iOS (macOS): instale o Xcode e abra o simulador
- Celular físico: instale o app Expo Go na loja de aplicativos
## **5. Criar o projeto Expo**
No terminal:
```bash
npx create-expo-app@latest meu-app
cd meu-app
npm run start
```
No menu interativo do Expo:
- a → abrir no Android
- i → abrir no iOS (somente no macOS)
- ou escaneie o QR Code com o Expo Go
## **6. Estrutura básica do projeto**
```plaintext
meu-app/
├─ app/   
├─ assets/
├─ package.json
└─ app.json
```
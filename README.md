# Whaticket Frontend

Frontend React do Whaticket, separado para publicacao independente no GitHub.

## Instalacao da stack completa

O instalador completo fica no repositorio do backend e instala backend + frontend em uma VPS Ubuntu:

```bash
curl -fsSL -o install-whaticket.sh https://raw.githubusercontent.com/jefersonflus/whaticket-backend/main/install-whaticket.sh
sudo bash install-whaticket.sh
```

Se os repositorios estiverem privados:

```bash
export GITHUB_TOKEN="seu_token"
curl -fsSL -H "Authorization: Bearer $GITHUB_TOKEN" \
  -o install-whaticket.sh \
  https://raw.githubusercontent.com/jefersonflus/whaticket-backend/main/install-whaticket.sh
sudo -E bash install-whaticket.sh
```

Veja o passo a passo em [docs/INSTALL.md](docs/INSTALL.md).

## Desenvolvimento local do frontend

```bash
cp .env.example .env
npm install
npm start
```

Para build de producao:

```bash
npm run build
PORT=3000 node server.js
```

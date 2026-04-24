# Instalacao do Whaticket

Use o instalador do backend para instalar toda a stack:

```bash
curl -fsSL -o install-whaticket.sh https://raw.githubusercontent.com/jefersonflus/whaticket-backend/main/install-whaticket.sh
sudo bash install-whaticket.sh
```

Com repositorios privados:

```bash
export GITHUB_TOKEN="seu_token_com_acesso"
curl -fsSL -H "Authorization: Bearer $GITHUB_TOKEN" \
  -o install-whaticket.sh \
  https://raw.githubusercontent.com/jefersonflus/whaticket-backend/main/install-whaticket.sh
sudo -E bash install-whaticket.sh
```

Com dominios e SSL:

```bash
sudo FRONTEND_DOMAIN=app.seudominio.com \
  BACKEND_DOMAIN=api.seudominio.com \
  CERTBOT_EMAIL=admin@seudominio.com \
  ENABLE_SSL=true \
  bash install-whaticket.sh
```

Com zip unico contendo `backend/` e `frontend/`:

```bash
sudo SOURCE_ZIP=/root/whaticket.zip bash install-whaticket.sh
```

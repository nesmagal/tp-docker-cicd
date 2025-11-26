# Dockerfile Backend
# Image de base légère Node.js 18 sur Alpine Linux

FROM node:18-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Étape 1 : copier d'abord les fichiers de dépendances pour optimiser le cache
COPY package*.json ./
RUN npm install                # Installe express, cors, pg

# Étape 2 : copier le reste du code source
COPY . .

# Expose le port 3000 (documentation)
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]


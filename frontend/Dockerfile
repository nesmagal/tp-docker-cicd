# Dockerfile Frontend
# Image Nginx légère pour servir des fichiers statiques

FROM nginx:alpine

# Copier les fichiers statiques dans le répertoire par défaut Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Exposer le port HTTP standard
EXPOSE 80

# CMD par défaut Nginx est déjà "nginx -g 'daemon off;'"


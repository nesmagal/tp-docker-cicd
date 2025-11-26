# Dockerfile pour PostgreSQL
# Image de base : postgres 15-alpine

FROM postgres:15-alpine

# Copier le script d'initialisation dans le dossier spécial de PostgreSQL
COPY init.sql /docker-entrypoint-initdb.d/init.sql

# Exposer le port par défaut de PostgreSQL
EXPOSE 5432


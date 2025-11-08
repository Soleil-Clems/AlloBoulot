#!/bin/bash

# Si le fichier .env n'existe pas, on le copie depuis .env.example
if [ ! -f .env ]; then
  echo "⚙️  Fichier .env introuvable, création depuis .env.example..."
  cp .env.example .env
else
  echo "✅ Fichier .env déjà présent."
  echo "🧹 Suppression de l'ancien fichier .env..."
  rm .env
  cp .env.example .env
fi

# Attendre que MySQL soit prêt
echo "Waiting for MySQL to be ready..."
until php artisan db:show 2>/dev/null; do
  echo "MySQL is unavailable - sleeping"
  sleep 2
done

echo "MySQL is up - executing migrations"




echo "================================================="
echo "=====     Execution of composer install     ====="
echo "================================================="
composer install

echo "================================================="
echo "=====   composer install successfully...    ====="
echo "================================================="
# Exécuter les migrations
php artisan migrate --force

# Optionnel : créer la table sessions si nécessaire
php artisan session:table --force 2>/dev/null || true
php artisan migrate

echo "================================================="
echo "=====         Generating app key...         ====="
echo "================================================="

php artisan key:generate --force

echo "================================================="
echo "=====      Generating app key success       ====="
echo "================================================="


echo "================================================="
echo "=====        Generating jwt key...          ====="
echo "================================================="


php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret


echo "================================================="
echo "=====      Generating jwt key success       ====="
echo "================================================="


echo "================================================="
echo "=====        Generating swagger doc...      ====="
echo "================================================="


php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
php artisan l5-swagger:generate


echo "================================================="
echo "=====     Generating swagger doc success    ====="
echo "================================================="


echo "================================================="
echo "=====       Generating artisan link...     ====="
echo "================================================="


php artisan storage:link


echo "================================================="
echo "=====        Generating artisan link        ====="
echo "================================================="



# Nettoyer le cache
php artisan config:clear
php artisan cache:clear

# Démarrer le serveur
exec php artisan serve --host=0.0.0.0 --port=8000
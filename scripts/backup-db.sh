#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Backup de la base de datos de NOVARA.
# Uso: ./scripts/backup-db.sh
# Requiere DATABASE_URL en el entorno (mismo formato que .env).
# Pensado para ejecutarse por cron / un job programado del
# proveedor de hosting, no como parte del arranque de la app.
# ─────────────────────────────────────────────────────────────
set -euo pipefail

if [ -z "${DATABASE_URL:-}" ]; then
  echo "Error: falta la variable de entorno DATABASE_URL." >&2
  exit 1
fi

BACKUP_DIR="${BACKUP_DIR:-./backups}"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
FILE="$BACKUP_DIR/novara_$TIMESTAMP.dump"

mkdir -p "$BACKUP_DIR"

echo "→ Generando backup en $FILE"
pg_dump "$DATABASE_URL" --format=custom --file="$FILE"

echo "→ Backup completado ($(du -h "$FILE" | cut -f1))"

# Retención: elimina backups de más de 30 días.
find "$BACKUP_DIR" -name "novara_*.dump" -mtime +30 -delete

echo "→ Restaurar con: pg_restore --clean --if-exists -d \$DATABASE_URL $FILE"

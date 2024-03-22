#Development
Pasos para levantar la App en desarrollo


1. Levantar la base de datos
2. Duplicar el .env y renombrarlo a .env.template
3. Reemplazar variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

docker compose up -d

# Prisma commands

````

npx prisma init
npx prisma migrate dev
npx prisma generate

````
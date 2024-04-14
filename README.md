#Development
Pasos para levantar la App en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```
2. Duplicar el .env y renombrarlo a .env.template
3. Reemplazar variables de entorno
4. Ejecutar el comando ``` npm install ```
5. Ejecutar el comando ``` npm run dev ```
6. Ejecutar los siguientes comandos de prisma
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

## Nota: Usuario por defecto
__usuario:__ solomeo@google.com
__password:__ 123456

docker compose up -d

# Prisma commands

````

npx prisma init
npx prisma migrate dev
npx prisma generate

````
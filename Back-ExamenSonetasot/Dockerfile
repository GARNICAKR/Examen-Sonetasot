FROM node:16
# Crea el directorio de trabajo
WORKDIR /app
# Copia los Package necesarios
COPY package*.json ./
# Instala las dependencias
RUN npm install
#Copiando todos los Archivos 
COPY . .
# Genera el cliente de Prisma
RUN npx prisma generate
# Aplica las migraciones de la base de datos
RUN npx prisma migrate dev
# Expone el puerto
EXPOSE 4000
# Inicia la aplicación
CMD ["npm", "start"]

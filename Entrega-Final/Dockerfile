# Usa una imagen base oficial de Node
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto de la app NestJS
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "run", "start"]

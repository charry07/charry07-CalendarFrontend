# Use the official Node.js 18 image from Docker Hub
FROM node:18

# Add variable .env to the container environment variables (optional)  
# ENV PORT=3001

# Create and change to the app directory
WORKDIR /app            

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./   

# Install production dependencies
RUN npm install          

# Copy the local source code to the image folder
COPY . .                

 # Configure port 3000 for the app to run on
EXPOSE 5173           

# Run the web service on container startup
CMD [ "npm", "start", "--", "--host" ]  


# despues en la raiz del proyecto agrego: .dockerignore (para ignorar archivos que no se necesitan en el contenedor como node_modules, .git, etc)
# despues con el comando [docker build -t nombre-de-proyecto] . (el punto es para decirle que esta en la raiz del proyecto)

# despues con el comando [docker run -p 5000:3000 nombre-de-proyecto] (el -p es para mapear el puerto 3000 del contenedor al puerto 5000 de mi maquina)


#el comando en la consola [docker container prune] borra todos los contenedores que no estan corriendo
#el comando en la consola [docker image prune] borra todas las imagenes que no estan corriendo


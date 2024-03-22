# Use Node 18 as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Use NGINX as the base image for serving the built project
FROM nginx:alpine

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the NGINX configuration file from your project to the Docker image
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built project from the previous stage to the NGINX default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that the NGINX server will run on
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
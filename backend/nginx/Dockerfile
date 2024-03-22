# Use the official Nginx image as a base
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a directory for /app/media
RUN mkdir -p /app/media


# Expose port for the Nginx server
EXPOSE 4000

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

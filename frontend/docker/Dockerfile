# Use the base image of Node.js 20
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files and install dependencies
COPY package.json package-lock.json /app/
RUN npm install

# Copy the rest of the frontend code to the container
COPY . /app

# Build the Angular application
RUN npm run build --prod

# Install the HTTP server to serve the Angular application
RUN npm install -g http-server

# Expose the port that the HTTP Server will use
EXPOSE 8080

# Command to start the HTTP server
CMD ["http-server", "dist"]

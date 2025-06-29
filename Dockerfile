# Stage 1: Build React App
FROM node:18-alpine as build

# Set working directory
WORKDIR /kaur_sukhsimran_ui_garden

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the production app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy the build output to nginx's public folder
COPY --from=build /kaur_sukhsimran_ui_garden/build /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083

# Replace default Nginx config with one that listens on 8083
RUN sed -i 's/80;/8083;/' /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Update npm to latest version (optional but recommended)
RUN npm install -g npm@11.4.2

# Install dependencies with legacy-peer-deps flag to avoid conflicts
RUN npm install --legacy-peer-deps

# Copy source files
COPY . .

# Build the production app
RUN npm run build

# Stage 2: Serve app with nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Start nginx server on port 8018
CMD ["nginx", "-g", "daemon off;"]

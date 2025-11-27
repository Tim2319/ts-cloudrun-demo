# Use official Node.js image
FROM node:18

# Set work directory inside container
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build TypeScript
RUN npm run build

# Cloud Run will look for PORT env
ENV PORT=8080

# Expose container port
EXPOSE 8080

# Start server
CMD ["npm", "start"]

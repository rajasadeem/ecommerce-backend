# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install

# Copy the rest of the application code.
COPY . .

# Build the TypeScript code.
RUN yarn build

# Inform Docker that the container is listening on the specified port.
EXPOSE 3000

# Run the application.
CMD ["yarn", "start"]

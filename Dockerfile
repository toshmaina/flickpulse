
# Stating the properties that the image should inherit from
FROM node
# stating the working directory of the image
WORKDIR /app
# Copying all the json files to the working directory i.e root directory of the image
COPY package*.json ./
# stating the command to install all the dependencies
RUN npm install
# Copy the rest of the source files into the image.
COPY . .
# Expose the port that the application listens on.
EXPOSE 3000
# Run the application.
CMD npm run dev

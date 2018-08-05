FROM node
WORKDIR /app
COPY . .
EXPOSE 4200
RUN npm install -g @angular/cli -y
RUN apt-get update && npm install && npm audit fix 
CMD ng serve --host 0.0.0.0
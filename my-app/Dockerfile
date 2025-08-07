FROM nginx:alpine

# Copy only the browser build from Angular
COPY ./dist/my-app/browser /usr/share/nginx/html

# Copy custom Nginx config file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

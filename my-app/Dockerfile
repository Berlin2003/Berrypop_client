FROM nginx:alpine

# Copy only the browser build from Angular
COPY ./dist/my-app/browser /usr/share/nginx/html

# Rename index.csr.html to index.html inside the image
RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html

# Copy custom Nginx config file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

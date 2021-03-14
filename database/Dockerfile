# Create mysql server based on the official image from the dockerhub
FROM mysql:5
# Add a database & root password
ENV MYSQL_DATABASE Cookbook
ENV MYSQL_ROOT_PASSWORD=test
# optionnaly, run initial scripts for creating tables 
COPY ./ /docker-entrypoint-initdb.d/

# Use the official Python Alpine base image with Python 3.11
FROM python:3.11-alpine

# Set the working directory in the container
WORKDIR /app

# Install the packages required for mysqlclient
RUN apk add --no-cache mariadb-connector-c-dev build-base

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install the project dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Install Gunicorn separately
RUN pip install gunicorn

# Copy the project code to the working directory
COPY . .

# Create a directory called media
RUN mkdir media

# Expose the port on which the server will run
EXPOSE 8000

# Set the command to run the server
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8000", "cui_past_papers.wsgi:application"]

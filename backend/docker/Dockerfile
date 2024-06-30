# Use the base image of Python 3.11
FROM python:3.11

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the config directory inside the container
COPY config/requirements.txt /app/config/

# Install the dependencies from the requirements file
RUN pip install --no-cache-dir -r config/requirements.txt

# Copy the rest of the backend code to the container
COPY . /app

# Set the PYTHONPATH environment variable
ENV PYTHONPATH=/app/src

# Set the working directory to src
WORKDIR /app/src

# Expose the port that FastAPI will use
EXPOSE 8000

# Command to start the FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

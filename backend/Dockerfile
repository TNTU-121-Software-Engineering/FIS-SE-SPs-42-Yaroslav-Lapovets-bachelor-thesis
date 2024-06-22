#FROM postgres:latest
#ENV POSTGRES_USER=postgres
#ENV POSTGRES_PASSWORD=admin
#ENV POSTGRES_DB=autoservice
#
#EXPOSE 5432

# Use Ubuntu as the base image
FROM ubuntu:latest

# Install required dependencies
RUN apt-get update && \
    apt-get install -y curl zip unzip && \
    apt-get clean

# Install SDKMAN and use it to install OpenJDK 20 and Maven
RUN curl -s "https://get.sdkman.io" | bash && \
    bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && sdk install java 20.0.1-open && sdk install maven"

# Set environment variables for Java and Maven
ENV JAVA_HOME=/root/.sdkman/candidates/java/current
ENV MAVEN_HOME=/root/.sdkman/candidates/maven/current
ENV PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$PATH

# Set the working directory
WORKDIR /app

# Copy the pom.xml file and download dependencies
COPY pom.xml .
RUN bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && mvn dependency:go-offline"

# Copy the source code and build the app
COPY src ./src
RUN bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && mvn package -DskipTests"

# Set the command to run the app
CMD ["java", "-jar", "/app/target/AutoService-0.0.1-SNAPSHOT.jar"]

# Expose the port the app runs on
EXPOSE 8080

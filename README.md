# 2a_Provider-Management-Component

Backend Code Base:   
Spring boot microservice application    
  Requirements:   
    - STS or IntelliJ  IDE fro development   
    - Language: Java 17   
    - Build tool :  Maven [Maven 3.5+] (mvn clean install -Dskip Tests)   
    - Spring boot Application (mvn spring-boot:run)   

    Database:  
     MySQL sserver and MySQLworkBench - add proper configuration in application.properties file in the apring boot application   
    https://dev.mysql.com/downloads/installer/    

UI Code Base:

Requirements:
 - Node v18.19.0
 - Yarn 1.22.21

Install UI dependencies 

1. Navigate to web-ui folder
2. Run `yarn install`

Run UI locally.

1. Navigate to web-ui folder
2. Run `yarn dev`
3. Navigate to  http://localhost:5173/

Deploy to aws s3
1. Navigate to web-ui folder
2. Run `sh scripts/publish-website.sh`

### AWS Deployment for Backend application:

1. Create a RDS instance of MySql Enigne - With Enabled Public access.
2. For Spring boot application- run this command on your local machine which will 
    pack the maven project and will create a .jar file.
    ##### mvn package
3. After creation of .jar file is done - add this .jar file to S3 bucket.
4. While adding .jar file to S3 bucket give public read access to this object.
5. Create an Ubuntu Ec2 instance for java application to be up and running.
6. Keep incoming inbound rule for port 3306 (sql) enabled in security group of Ec2 instance.
7. After Ec2 is up and running install jdk on it.
8. Get a jar file from S3 to Ec2 using command
   #### wget object url
9. Run .jar file using below command
   #### java -jar jar file name



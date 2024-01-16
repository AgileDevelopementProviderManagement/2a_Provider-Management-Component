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


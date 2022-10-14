# **Overview**

To run applications:

**IMPORTANT**
.emv file is required to run this program. MONGO_URL = (URL for MongoDB)
Run backend:
cd project-cis_4339_project_23
npm install
npm run nodemon app.js

Run Frontend:
cd project-cis_4339_project_23
cd frontend
cd "sprint 3"
npm install
npm run dev

|CIS 4339 Sprint 2: External API Documentation|Group 23|Endpoints of all backend functions|

# **Resources**
Sprint 1 + 2
https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
https://university.mongodb.com/courses/M001/about
https://www.mongodb.com/developer/quickstart/node-crud-tutorial/
https://www.youtube.com/watch?v=3Nvx0mNXPc4&ab_channel=TheNetNinja
Sprint 3
https://getbootstrap.com/docs/4.0/components/buttons/
https://router.vuejs.org/api/
https://stackoverflow.com/questions/52758637/does-cors-error-related-to-front-end-or-back-end
https://v2.vuejs.org/v2/guide/components.html?redirect=true

#### **Data**

### Inserting A Client into the Collection (Endpoints)
This endpoint will insert a client into the databse.

To insert client data in the collection, the request is:

    POST http://127.0.0.1:3000/Client/:id

#### Example Request:

    http://127.0.0.1:3000/Client/1

     [
        {
            "clientID": 6,
            "firstName": "Fred",
            "lastName": "Flintstone",
            "middleInitial": "J",
            "zipCode": "77004",
            "birthday": "1999-09-02T00:00:00.000Z",
            "ssn": "971-23-2612",
            "gender": "male",
            "driverLicense": "12",
            "raceEthnicity": "Japanese",
            "__v": 0
        },
    ]

#### Example Response:

    Client is added to the database

### Listing the client table
To fetch all the Client data in the collection, the request is:

    GET http://127.0.0.1:3000/Client/ 

#### Example Response:
    [
        {
            "_id": "59e0b280-9b36-11ec-9a00-778ef355c11d",
            "clientID": 6,
            "firstName": "Fred",
            "lastName": "Flintstone",
            "middleInitial": "J",
            "zipCode": "77004",
            "birthday": "1999-09-02T00:00:00.000Z",
            "ssn": "971-23-2612",
            "gender": "male",
            "driverLicense": "12",
            "raceEthnicity": "Japanese",
            "__v": 0
        },
    ]

### Update A Client by ID

    PUT http://127.0.0.1:3000/Client/:id

#### Example Request:
    [
        {
            "clientID": 1,
            "firstName": "Fred",
            "lastName": "Flintstone",
            "middleInitial": "J",
            "zipCode": "77004",
            "birthday": "1999-09-02T00:00:00.000Z",
            "ssn": "971-23-2612",
            "gender": "male",
            "driverLicense": "12",
            "raceEthnicity": "Japanese",
            "__v": 0
        },
    ]

#### Example Response:

    Client is successfully via PUT!

### Deleting A Client by the Id


To delete a Client, the request is:

    DELETE http://127.0.0.1:3000/Client/:id

#### Example Request:
    [
        {
            "clientID": 1,
            "firstName": "Fred",
            "lastName": "Flintstone",
            "middleInitial": "J",
            "zipCode": "77004",
            "birthday": "1999-09-02T00:00:00.000Z",
            "ssn": "971-23-2612",
            "gender": "male",
            "driverLicense": "12",
            "raceEthnicity": "Japanese",
            "__v": 0
        },
    ]
        
        

#### Example Response:

    {
        "msg": {
        "_id": "c80ca5c0-9b4a-11ec-88d6-518550e4ea75",
        "clientID": 1,
        "firstName": "Fred",
        "lastName": "Flintstone",
        "middleInitial": "J",
        "zipCode": "77004",
        "birthday": "1999-09-02T00:00:00.000Z",
        "ssn": "971-23-2612",
        "gender": "male",
        "driverLicense": "12",
        "raceEthnicity": "Japanese",
        "__v": 0
            }
    }


### Data Object
|Field|Type|Description|
|:--  |:-- |:--       |
|ClientId|Number|The id of the client|
|firstName|String|The first name of the client|
|lastName|String|The last name of the client|
|middleInital|String|The middle inital of the client|
|zipCode|String|The zipcode of the client|
|birthday|Date|The birthday of the client|
|ssn|String|The social security number of the client|
|gender|String|The gender of the client|
|driverLicense|String|The drivers license number of the client|
|raceEthnicity|String|The ethnicity of the client|




### Inserting A ContactInformation to the Collection
This endpoint will insert a ContactInformation into the databse.

To insert ContactInformation data in the collection, the request is:

    POST http://127.0.0.1:3000/ContactInformation/

#### Example Request: 
    {
        "clientID": 1,
        "homeNum": "832-123-4567",
        "cellNum": "832-424-6435",
        "personalEmail": "jhaney@gmail.com",
        "maritalStatus": "Married",
        "language": "English",
        "priorityPopulation": "No"
    }


### Listing the ContactInformation table

This will display all the country that is in the collection.

To fetch all the ContactInformation data in the collection, the request is:

    GET http://127.0.0.1:3000/Client-ContactInformation/:id

#### Example Response:

    {
        "_id": "23792280-9b46-11ec-9c2b-b70fc346f2ef",
        "clientID": 1,
        "homeNum": "832-123-4567",
        "cellNum": "832-424-6435",
        "personalEmail": "jhaney@gmail.com",
        "maritalStatus": "Married",
        "language": "English",
        "priorityPopulation": "No",
        "__v": 0
    }


#### Example Response:

    Contact Information is added to the database

### Update A ContactInformation by ID  
    PUT http://127.0.0.1:3000/UpdateContactInformation/:id

#### Example Request:
    {
        "clientID": 2,
        "homeNum": "832-123-4567",
        "cellNum": "832-424-6435",
        "personalEmail": "jhaney@gmail.com",
        "maritalStatus": "Not Married",
        "language": "English",
        "priorityPopulation": "No"
    }

#### Example Response:

    Contact Information is edited via PUT

### Deleting A ContactInformation by the Id


To delete a ContactInformation, the request is:

    DELETE http://127.0.0.1:3000/DeleteContactInformation/:id


#### Example Response:

    {
        "clientID": 2,
        "homeNum": "832-123-4567",
        "cellNum": "832-424-6435",
        "personalEmail": "jhaney@gmail.com",
        "maritalStatus": "Married",
        "language": "English",
        "priorityPopulation": "No"
    }


### Data Object
|Field|Type|Description|
|:--  |:-- |:--       |
|ClientId|Number|The id of the Client|
|homeNum|String|Home Phone Number of ContactInformation|
|cellNum|String|Cell Phone number of ContactInformation|
|personalEmail|String|Personal Email of ContactInformation|
|martialStatus|String|Marital Status of ContactInformation|
|language|String|Language spoken of ContactInformation|
|priorityPopulation|String|States if the Contact is priority|




### Inserting An Education to the Collection
This endpoint will insert an education into the databse.

To insert education data in the collection, the request is:

    POST http://127.0.0.1:3000/Client-Education/:id'
#### Example Request: 
    
        {
            "clientID": 1,
            "school": "University of Houston",
            "lastGrade": "A-",
            "graduationStatus": "Not graduated",
            "degree": "Computer Information Systems",
            "certification": "Tableau"
        }

### Listing the Education table

This will display education information that is in the collection.

To fetch all the education data in the collection, the request is:

    GET http://127.0.0.1:3000/Client-Education/:id

#### Example Response:
    [
        {
            "_id": "59e0b280-9b36-11ec-9a00-778ef355c11d",
            "clientID": 6,
            "firstName": "Fred",
            "lastName": "Flintstone",
            "middleInitial": "J",
            "zipCode": "77004",
            "birthday": "1999-09-02T00:00:00.000Z",
            "ssn": "971-23-2612",
            "gender": "male",
            "driverLicense": "12",
            "raceEthnicity": "Japanese",
            "__v": 0
        },
    ]


#### Example Response:

    Education document is added to the database

### Update An Education by ID
    
    PUT http://127.0.0.1:3000/UpdateEducation/:id

#### Example Request:
    
        {
            "clientID": 2,
            "school": "University of Houston",
            "lastGrade": "C",
            "graduationStatus": "Graduated",
            "degree": "Computer Science",
            "certification": "Tableau"
        }
    

#### Example Response:

    Education document has been updated via PUT

### Deleting An Education by Id


To delete a education, the request is:

    DELETE http://127.0.0.1:3000/DeleteEducation/:id


#### Example Request:

    {
        "_id": "c131f4f0-9b48-11ec-88d6-518550e4ea75",
        "clientID": 2,
        "school": "University of Houston",
        "lastGrade": "C",
        "graduationStatus": "Graduated",
        "degree": "Computer Information Systems",
        "certification": "Tableau",
        "__v": 0
    }



#### Example Response:
 
    "msg": {
        "_id": "c131f4f0-9b48-11ec-88d6-518550e4ea75",
        "clientID": 2,
        "school": "University of Houston",
        "lastGrade": "C",
        "graduationStatus": "Graduated",
        "degree": "Computer Information Systems",
        "certification": "Tableau",
        "__v": 0
        }



### Data Object
|Field|Type|Description|
|:--  |:-- |:--       |
|ClientId|Number|The id of the client|
|school|String|Learning institution individual attends|
|lastGrade|String|Last grade received from education|
|graduationStatus|String|Status of individual's graduation|
|degree|String|Degree obtained by individual|
|certification|String|Cerification of individual|

### Inserting A Employment to the Collection
This endpoint will insert a Employment into the databse.

To insert Employment data in the collection, the request is:

    POST http://127.0.0.1:3000/Employment/

#### Example Request: 
    {
        "clientID": 2,
        "employmentStatus": "Employed",
        "employer": "JHaneyPlastics",
        "length": "4 Years",
        "Occupation": "CEO"
    }

### Listing the Employment table

This will display all the country that is in the collection.

To fetch all the Employment data in the collection, the request is:

    GET http://127.0.0.1:3000/Employment/ 

#### Example Response:
 
    {
        "_id": "9dc0ccf0-9b50-11ec-b01a-1ff973028aac",
        "clientID": 2,
        "employmentStatus": "Employed",
        "length": "4 Years",
        "employer": "JHaneyPlastics",
        "__v": 0
    }



#### Example Response:

    Employment is added to the database

### Update A Employment by ID

    PUT http://127.0.0.1:3000/UpdateEmployment/:id

#### Example Request:
    {
        "clientID": 1,
        "employmentStatus": "Employed",
        "employer": "JHaneyPlastics",
        "length": "4 Years",
        "Occupation": "CEO"
    }


#### Example Response:

   Employment document is edited via PUT

### Deleting A Employment by the Id


To delete a Employment, the request is:

    DELETE http://127.0.0.1:3000/DeleteEmployment/:id

#### Example Request:

    {
        "clientID": 2,
        "employmentStatus": "Employed",
        "employer": "JHaneyPlastics",
        "length": "4 Years",
        "Occupation": "CEO"
    }

        

#### Example Response:


    "msg": {
        "_id": "3dea1510-9b51-11ec-b01a-1ff973028aac",
        "clientID": 2,
        "employmentStatus": "Employed",
        "length": "4 Years",
        "employer": "JHaneyPlastics",
        "__v": 0
        }


### Data Object
|Field|Type|Description|
|:--  |:-- |:--       |
|ClientId|Number|The id of the client|
|school|String|Learning institution individual attends|
|lastGrade|String|Last grade received from education|
|graduationStatus|String|Status of individual's graduation|
|degree|String|Degree obtained by individual|
|certification|String|Cerification of individual|



### Inserting A Event to the Collection
This endpoint will insert a Event into the databse.

To insert Event data in the collection, the request is:

    POST http://127.0.0.1:3000/Event/

#### Example Request: 
    {
        "clientID": 1,
        "eventDescription": "Bread of Life Charity",
        "eventDate  ": "03/03/2022",
        "eventAddress": "777 kateland way, Houston, Texas",
        "eventZip": "77573",
        "shortNotes": "Walkathon",
        "WorkerID": 2
    }

### Listing the Event table

This will display all the country that is in the collection.

To fetch all the Event data in the collection, the request is:

    GET http://127.0.0.1:3000/Event/ 

#### Example Response:
 
    {
        "_id": "9dc0ccf0-9b50-11ec-b01a-1ff973028aac",
        "clientID": 2,
        "EventStatus": "Employed",
        "length": "4 Years",
        "employer": "JHaneyPlastics",
        "__v": 0
    }

#### Example Response:

    Event is added to the database

### Update A Event by ID

    PUT http://127.0.0.1:3000/UpdateEvent/:id

#### Example Request:
    {
        "clientID": 1,
        "EventStatus": "Employed",
        "employer": "JHaneyPlastics",
        "length": "4 Years",
        "Occupation": "CEO"
    }


#### Example Response:
   Event document is edited via PUT

### Deleting A Event by the Id


To delete a Event, the request is:

    DELETE http://127.0.0.1:3000/DeleteEvent/:id

#### Example Request:

    {
        "clientID": 2,
        "EventStatus": "Employed",
        "employer": "JHaneyPlastics",
        "length": "4 Years",
        "Occupation": "CEO"
    }

        

#### Example Response:


    "msg": {
        "_id": "3dea1510-9b51-11ec-b01a-1ff973028aac",
        "clientID": 2,
        "EventStatus": "Employed",
        "length": "4 Years",
        "employer": "JHaneyPlastics",
        "__v": 0
    }


|Field|Type|Description|
|:-- |:-- |:-- |
|ClientId|Number|The id of the Client|
|eventDescription|String|Description of Event attending|
|eventDate|String|Date that Event will be done|
|eventAddress|String|Adress of Event location|
|eventZip|Number|Zip code of Event Adress|
|shortNotes|String|Specification notes for Event|
|workerID|String|ID of worker for the Event|



### Inserting A Family to the Collection
This endpoint will insert a Family into the databse.

To insert Family data in the collection, the request is:

    POST http://127.0.0.1:3000/Family/

#### Example Request: 
        {
        "clientID": 1,
        "familyMember": {
                        "lastName": "Haney",
                        "firstName": "John",
                        "gender": "Male",
                        "birthday": "03/03/2020",
                        "age": "1",
                        "relation": "Son",
                        "race": "Hispanic"
                        }

        }

### Listing the Family table

This will display all the country that is in the collection.

To fetch all the Family data in the collection, the request is:

    GET http://127.0.0.1:3000/Client-Family/:id

#### Example Response:
 
    {
        "_id": "12ad4fc0-9b5b-11ec-bba5-397af897b242",
        "clientID": 1,
        "familyMember": [
            {
                "lastName": "Haney",
                "firstName": "John",
                "gender": "Male",
                "birthday": "03/03/2020",
                "age": 1,
                "relation": "Son",
                "race": "Hispanic",
                "_id": "62216c5f05e958556b6b492b"
            }
        ],
        "__v": 0
    }



#### Example Response:

    Family is added to the database

### Update A Family by ID

    PUT http://127.0.0.1:3000/UpdateFamily/:id

#### Example Request:
        {
        "clientID": 2,
        "familyMember": {
                        "lastName": "Haney",
                        "firstName": "John",
                        "gender": "Male",
                        "birthday": "03/03/2020",
                        "age": "1",
                        "relation": "Son",
                        "race": "Hispanic"
                        }

        }

#### Example Response:

   Family is edited via PUT

### Deleting A Family by the Id


To delete a Family, the request is:

    DELETE http://127.0.0.1:3000/DeleteFamily/:id

#### Example Request:

        {
        "clientID": 1,
        "familyMember": {
                        "lastName": "Haney",
                        "firstName": "John",
                        "gender": "Male",
                        "birthday": "03/03/2020",
                        "age": "1",
                        "relation": "Son",
                        "race": "Hispanic"
                        }

        }


#### Example Response:


    "msg": {
        "_id": "f44ae140-9b5b-11ec-800d-9d5bcf09ca5a",
        "clientID": 1,
        "familyMember": [
            {
                "lastName": "Haney",
                "firstName": "John",
                "gender": "Male",
                "birthday": "03/03/2020",
                "age": 1,
                "relation": "Son",
                "race": "Hispanic",
                "_id": "62216ddae94131e9efda3edd"
            }
        ],
        "__v": 0
        }


|Field|Type|Description|
|:-- |:-- |:-- |
|ClientId|Number|The id of the Client|
|familyMember|String|Family Member of Client|
|firstName|String|Name of Client FamilyMember|
|birthday|String|Birthday of Client FamilyMember|
|age|Number|Age of Client FamilyMember|
|race|String|Race of Client FamilyMember|



### Inserting A Health to the Collection
This endpoint will insert a Health into the databse.

To insert Health data in the collection, the request is:

    POST http://127.0.0.1:3000/Health/

#### Example Request: 
    {
        "clientID": 1,
        "healthInsuranceStatus": "Yes",
        "healthInsuranceProgram": "Medicaid",
        "foodStampsStatus": "Yes",
        "foodStampAmount": "$1000"

    }

#### Example Response:

    Health is added to the database

### Listing the Health table

This will display all the country that is in the collection.

To fetch all the Health data in the collection, the request is:

    GET http://127.0.0.1:3000/Health/:id 

#### Example Response:

    {
        "_id": "78c69720-9b5c-11ec-9282-63c556c093ea",
        "clientID": 1,
        "healthInsuranceStatus": "Yes",
        "healthInsuranceProgram": "Medicaid",
        "foodStampsStatus": "Yes",
        "__v": 0
    }



### Update A Health by ID

    PUT http://127.0.0.1:3000/UpdateHealth/:id

#### Example Request:
    {
        "clientID": 2,
        "healthInsuranceStatus": "No",
        "healthInsuranceProgram": "NULL",
        "foodStampsStatus": "Yes",
        "foodStampAmount": "$1000"

    }

#### Example Response:

   Health is edited via PUT

### Deleting A Health by the Id


To delete a Health, the request is:

    DELETE http://127.0.0.1:3000/DeleteHealth/:id

#### Example Request:
    {
        "clientID": 2,
        "healthInsuranceStatus": "No",
        "healthInsuranceProgram": "NULL",
        "foodStampsStatus": "Yes",
        "foodStampAmount": "$1000"

    }
        

#### Example Response:

    "msg": {
        "_id": "78c69720-9b5c-11ec-9282-63c556c093ea",
        "clientID": 2,
        "healthInsuranceStatus": "No",
        "healthInsuranceProgram": "NULL",
        "foodStampsStatus": "Yes",
        "__v": 0
        }


|Field|Type|Description|
|:-- |:-- |:-- |
|ClientId|Number|The id of the Client|
|healthInsuranceStatus|String|Status of Health Insurance of Client|
|healthInsuranceProgram|String|Health Insurance Program type|
|foodStampsStatus|String|Status of Food Stamps provided|
|foodStampsAmount|Number|amount of Food Stamps received|


### Inserting A Income to the Collection
This endpoint will insert a Income into the databse.

To insert Income data in the collection, the request is:

    POST http://127.0.0.1:3000/Income/
    
#### Example Request: 
    {
        "clientID": 2,
        "headOfHouseholdStatus": "Yes",
        "monthlyIncome": 2000,
        "spousalSupport": 1000,
        "workComp": 1000,
        "childSupport": 800,
        "tanf": 1100,
        "ssi": 1500,
        "unemployment": 2000,
        "socialSecurity": 400

    }

#### Example Response:

    Income is added to the database

### Listing the Income table

This will display all the country that is in the collection.

To fetch all the Income data in the collection, the request is:

    GET http://127.0.0.1:3000/Client-Income/:id

#### Example Response:
 
    {
        "_id": "9dc0ccf0-9b50-11ec-b01a-1ff973028aac",
        "clientID": 2,
        "IncomeStatus": "Employed",
        "length": "4 Years",
        "employer": "JHaneyPlastics",
        "__v": 0
    }


### Update A Income by ID

    PUT http://127.0.0.1:3000/UpdateIncome/:id

#### Example Request:
    {
        "clientID": 1,
        "headOfHouseholdStatus": "No",
        "monthlyIncome": 500,
        "spousalSupport": 222,
        "workComp": 555,
        "childSupport": 333,
        "tanf": 550,
        "ssi": 1550,
        "unemployment": 2555,
        "socialSecurity": 400

    }


#### Example Response:

   Income is edited via PUT

### Deleting A Income by the Id

To delete a Income, the request is:

    DELETE http://127.0.0.1:3000/DeleteIncome/:id

#### Example Request:

    http://127.0.0.1:3000/DeleteIncome/2
        

#### Example Response:


    "msg": {
        "_id": "ede9be80-9b5f-11ec-b257-d56b910bf7d5",
        "clientID": 2,
        "headOfHouseholdStatus": "Yes",
        "monthlyIncome": 2000,
        "spousalSupport": 1000,
        "workComp": 1000,
        "childSupport": 800,
        "tanf": 1100,
        "ssi": 1500,
        "unemployment": 2000,
        "socialSecurity": 400,
        "__v": 0
        }

|Field|Type|Description|
|:-- |:-- |:-- |
|ClientId|Number|The id of the Client|
|headOfHouseholdStatus|String|Head of house hold status of Client|
|monthlyIncome|Number|Monthly Income of Client|
|spousalSupport|Number|Additional Income from spouse|
|workComp|Number|Amount of Work Compensation if unable to work|
|tanf|Number|Amount of Temporary Assistance if applicable|
|ssi|Number|Amount of Supplemental Security Income if applicable|
|unemployment|Number|Amount of unemployment compensation if applicable|
|socialSecurity|Number|Amount of social security compensation if applicable|



### Inserting A Intake to the Collection
This endpoint will insert a Intake into the databse.

To insert Intake data in the collection, the request is:

    POST http://127.0.0.1:3000/Intake/

#### Example Request: 
    {
        "clientID": 2,
        "familyID": 2,
        "startDate": "03/03/2022",
        "endDate": "03/03/2023"
    }

#### Example Response:

    Intake is added to the database

### Listing the Intake table

This will display all the country that is in the collection.

To fetch all the Intake data in the collection, the request is:

    http://127.0.0.1:3000/Client-Intake/1

#### Example Response:

    {
        "_id": "d1dbb560-9b62-11ec-b2eb-bd0607b34500",
        "clientID": 1,
        "familyID": 1,
        "startDate": "03/03/2022",
        "endDate": "03/03/2023",
        "__v": 0
    }


### Update A Intake by ID

    PUT http://127.0.0.1:3000/UpdateIntake/:id

#### Example Request:
    {
        "clientID": 1,
        "familyID": 1,
        "startDate": "03/03/2025",
        "endDate": "03/03/2023"
    }

#### Example Response:

   Intake is edited via PUT

### Deleting A Intake by the Id


To delete a Intake, the request is:

    DELETE http://127.0.0.1:3000/DeleteIntake/:id

#### Example Request:

    http://127.0.0.1:3000/DeleteIntake/2

        

#### Example Response:


    "msg": {
        "_id": "e616d8c0-9b62-11ec-b2eb-bd0607b34500",
        "clientID": 2,
        "familyID": 2,
        "startDate": "03/03/2022",
        "endDate": "03/03/2023",
        "__v": 0
        }


|Field|Type|Description|
|:-- |:-- |:-- |
|ClientId|Number|The id of the Client|
|familyID|Number|ID of Clients family|
|startDate|String|Start date of Intake|
|endDate|String|End date of Intake|



### Inserting A Residence to the Collection
This endpoint will insert a Residence into the databse.

To insert Residence data in the collection, the request is:

    POST http://127.0.0.1:3000/Residence/

#### Example Request: 
    {
        "clientID": 2,
        "address": "777 Kateland Way",
        "city": "Houston",
        "state": "Texas",
        "county": "Galveston",
        "zip": 77057,
        "totalRent": 3000,
        "utilityStatus": "Yes",
        "subsidizedStatus": "No",
        "isSingleParent": "Yes"
    }

#### Example Response:

    Residence is added to the database

### Listing the Residence table

This will display all the country that is in the collection.

To fetch all the Residence data in the collection, the request is:

    GET http://127.0.0.1:3000/Client-Residence/:id

#### Example Response:

    {
        "_id": "88682240-9b69-11ec-be5b-ab70cc731f54",
        "clientID": 1,
        "address": "777 Kateland Way",
        "city": "Houston",
        "state": "Texas",
        "county": "Galveston",
        "zip": 77057,
        "totalRent": 3000,
        "utilityStatus": "Yes",
        "subsidizedStatus": "No",
        "isSingleParent": "Yes",
        "__v": 0
    }



### Update A Residence by ID

    PUT http://127.0.0.1:3000/UpdateResidence/:id

#### Example Request:
    {
        "clientID": 2,
        "address": "777 Kateland Way",
        "city": "Houston",
        "state": "Texas",
        "county": "Galveston",
        "zip": 77057,
        "totalRent": 5000,
        "utilityStatus": "No",
        "subsidizedStatus": "No",
        "isSingleParent": "Yes"
    }

#### Example Response:

   Residence is edited via PUT

### Deleting A Residence by the Id


To delete a Residence, the request is:

    DELETE http://127.0.0.1:3000//DeleteResidence/:id

#### Example Request:

    http://127.0.0.1:3000/DeleteResidence/2


#### Example Response:


    "msg": {
        "_id": "8b105ee0-9b69-11ec-be5b-ab70cc731f54",
        "clientID": 2,
        "address": "777 Kateland Way",
        "city": "Houston",
        "state": "Texas",
        "county": "Galveston",
        "zip": 77057,
        "totalRent": 5000,
        "utilityStatus": "No",
        "subsidizedStatus": "No",
        "isSingleParent": "Yes",
        "__v": 0
        }


|Field|Type|Description|
|:-- |:-- |:-- |
|ClientId|Number|The id of the Client|
|address|String|Address of Client residence|
|city|String|City where Clients residence is located|
|state|String|State where Clients residence is located|
|county|String|County where Clients residence is located|
|zip|Number|Zip Code where Clients residence is located|
|totalRent|Number|Total Rent paid toward residence|
|utilityStatus|String|Status of utility in residence|
|isSingleParent|String|Is Client a single parent|



### Inserting A Worker to the Collection
This endpoint will insert a Worker into the databse.

To insert Worker data in the collection, the request is:

    POST http://127.0.0.1:3000/Worker/
#### Example Request: 
    {
        "clientID": 1,
        "workerID": 1,
        "firstName": "John",
        "lastName": "Haney"
    }

#### Example Response:

    Worker is added to the database


### Listing the Worker table

This will display all the country that is in the collection.

To fetch all the Worker data in the collection, the request is:

    GET http://127.0.0.1:3000/Client-Worker/:id

#### Example Response:

    {
        "_id": "829934c0-9b6a-11ec-bde8-a172f3c8e99b",
        "clientID": 1,
        "workerID": 1,
        "firstName": "John",
        "lastName": "Haney",
        "__v": 0
    }


### Update A Worker by ID

    PUT http://127.0.0.1:3000/UpdateWorker/:id

#### Example Request:
    {
        "clientID": 2,
        "workerID": 2,
        "firstName": "Charles",
        "lastName": "Billington"
    }


#### Example Response:

   Worker is edited via PUT

### Deleting A Worker by the Id

To delete a Worker, the request is:

    DELETE http://127.0.0.1:3000/DeleteWorker/:id

#### Example Request:

    http://127.0.0.1:3000/DeleteWorker/2


#### Example Response:


    "msg": {
        "_id": "8ae6e870-9b6a-11ec-bde8-a172f3c8e99b",
        "clientID": 2,
        "workerID": 2,
        "firstName": "Charles",
        "lastName": "Billington",
        "__v": 0
        }

|Field|Type|Description|
|:-- |:-- |:-- |
|ClientId|Number|The id of the Client|
|workerID|Number|The id of the Worker|
|firstName|String|First Name of Worker|
|lastName|String|Last name of Worker|

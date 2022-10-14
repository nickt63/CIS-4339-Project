//Group 23
const express = require("express");
const mongoose = require("mongoose"); // Require mongoose library
//Adding better logging functionality
const morgan = require("morgan");
const cors = require("cors");

//const MongoClient = require('mongodb').MongoClient;
//const PORT =

require("dotenv").config(); // Require the dotenv

const app = express(); //Create new instance

// setting up mongoose DB connection
mongoose
  .connect(process.env.MONGO_URL) // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 5000; //Declare the port number

//let Project;

/*let connectionString = 'mongodb+srv://admin_a:CIS4339@cis4339.3kjaj.mongodb.net/test'
MongoClient.connect( //Connect to the mongo database
  connectionString,
  {
      useNewUrlParser: true, useUnifiedTopology: true},
      function (err, Client){
          Project = Client.db();
          app.listen(PORT, () => console.log('Listening on http://localhost:${PORT}'))
  }
)*/

app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev")); //enable incoming request logging in dev mode
app.use(cors());
//Defining models
let ClientModel = require("./backend/models/Client"); //Client Model
let ContactInformationModel = require("./backend/models/ContactInformation");
let EducationModel = require("./backend/models/Education"); //Education Model
let EmploymentModel = require("./backend/models/Employment"); //Employment Model
let EventModel = require("./backend/models/Event"); //Event Model
let FamilyModel = require("./backend/models/Family"); //Family Model
let HealthModel = require("./backend/models/Health"); //Health Model
let IncomeModel = require("./backend/models/Income"); //Income Model
let IntakeModel = require("./backend/models/Intake"); //Intake Model
let ResidenceModel = require("./backend/models/Residence"); //Residence Model
let WorkerModel = require("./backend/models/Worker"); //Worker Model

//Aggregate Function
// retrieve income by client id
// app.get("/Client-Income/:id", (req, res, next) => {
//   ClientModel.aggregate(
//     [
//       { $match: { clientID: req.params.id } },
//       { $project: { _id: 0, clientID: 1 } },
//       {
//         $lookup: {
//           from: "Income",
//           localField: "clientID",
//           foreignField: "clientID",
//           as: "Income",
//         },
//       },
//     ],
//     (error, data) => {
//       if (error) {
//         return next(error);
//       } else {
//         res.json(data);
//       }
//     }
//   );
// });

// Client Crud Operations
// Create a client
app.post("/Client", (req, res, next) => {
  ClientModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Client is added to the database");
    }
  });
});

//read all clients from the API
app.get("/Clients/", (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  ClientModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//read all events from the API
app.get("/Events/", (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  EventModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Read contact information by client id
app.get("/Client/:id", (req, res, next) => {
  ClientModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update a client
app.put("/UpdateClient/:id", (req, res, next) => {
  ClientModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Client is edited via PUT");
        console.log("Client is successfully updated!", data);
      }
    }
  );
});

//delete a client by id
app.delete("/DeleteClient/:id", (req, res, next) => {
  //mongoose will use studentID of document
  ClientModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Create Contact Information
app.post("/ContactInformation", (req, res, next) => {
  ContactInformationModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      // res.json(data)
      res.send("Contact Information is added to the database");
    }
  });
});

// Read contact information by client id
app.get("/Client-ContactInformation/:id", (req, res, next) => {
  ContactInformationModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating contact information
app.put("/UpdateContactInformation/:id", (req, res, next) => {
  ContactInformationModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Contact Information is edited via PUT");
        console.log("Contact Information successfully updated!", data);
      }
    }
  );
});

//delete contact information by id
app.delete("/DeleteContactInformation/:id", (req, res, next) => {
  //mongoose will use studentID of document
  ContactInformationModel.findOneAndRemove(
    { clientID: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    }
  );
});

// Create education document
app.post("/Education", (req, res, next) => {
  EducationModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Education document is added to the database");
    }
  });
});

// Reads Education document by client ID
app.get("/Client-Education/:id", (req, res, next) => {
  EducationModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating education by client ID
app.put("/UpdateEducation/:id", (req, res, next) => {
  EducationModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Education document has been updated via PUT");
        console.log("Education has successfully updated!", data);
      }
    }
  );
});

//delete education document by client ID
app.delete("/DeleteEducation/:id", (req, res, next) => {
  //mongoose will use studentID of document
  EducationModel.findOneAndRemove(
    { clientID: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    }
  );
});

// create employment document
app.post("/Employment", (req, res, next) => {
  EmploymentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Employment document is added to the database");
    }
  });
});

// read employment document given client id
app.get("/Client-Employment/:id", (req, res, next) => {
  EmploymentModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating employment document vis client ID
app.put("/UpdateEmployment/:id", (req, res, next) => {
  EmploymentModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Employment document is edited via PUT");
        console.log("Employement Document is successfully updated!", data);
      }
    }
  );
});

//delete employment document by client id
app.delete("/DeleteEmployment/:id", (req, res, next) => {
  //mongoose will use studentID of document
  EmploymentModel.findOneAndRemove(
    { clientID: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    }
  );
});

// Create a event
app.post("/Event", (req, res, next) => {
  EventModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Event has been added to the database");
    }
  });
});

//read all events from the API
app.get("/Client-Event", (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  EventModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update an event
app.put("/Event/:id", (req, res, next) => {
  EventModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Event is edited via PUT");
        console.log("Event is successfully updated!", data);
      }
    }
  );
});

//delete an event by id
app.delete("/DeleteEvent/:id", (req, res, next) => {
  //mongoose will use studentID of document
  EventModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Create Family
app.post("/Family", (req, res, next) => {
  FamilyModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Family is added to the database");
    }
  });
});

// Get new client ID
app.get("/GetNewFamilyID", (req, res, next) => {
  IntakeModel.aggregate(
    [{ $group: { _id: null, max: { $max: "$familyID" } } }],
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data[0].max + 1);
      }
    }
  );
});

// Get new client ID
app.get("/GetNewWorkerID", (req, res, next) => {
  EventModel.aggregate(
    [{ $group: { _id: null, max: { $max: "$clientID" } } }],
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data[0].max + 1);
      }
    }
  );
});

// Read Family by client id
app.get("/Client-Family/:id", (req, res, next) => {
  FamilyModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating Family
app.put("/UpdateFamily/:id", (req, res, next) => {
  FamilyModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Family is edited via PUT");
        console.log("Family successfully updated!", data);
      }
    }
  );
});

//delete family by id
app.delete("/DeleteFamily/:id", (req, res, next) => {
  //mongoose will use studentID of document
  FamilyModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Create Health
app.post("/Health", (req, res, next) => {
  HealthModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Health is added to the database");
    }
  });
});

// Read health information by client id
app.get("/Client-Health/:id", (req, res, next) => {
  HealthModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating Health
app.put("/UpdateHealth/:id", (req, res, next) => {
  HealthModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Health is edited via PUT");
        console.log("Health successfully updated!", data);
      }
    }
  );
});

//delete Health by id
app.delete("/DeleteHealth/:id", (req, res, next) => {
  //mongoose will use studentID of document
  HealthModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Create Income
app.post("/Income", (req, res, next) => {
  IncomeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Income is added to the database");
    }
  });
});

// Read Income by client id
app.get("/Client-Income/:id", (req, res, next) => {
  IncomeModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//read all clients from the API
app.get("/Incomes", (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  IncomeModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating Income
app.put("/UpdateIncome/:id", (req, res, next) => {
  IncomeModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Income is edited via PUT");
        console.log("Income successfully updated!", data);
      }
    }
  );
});

//delete Income by id
app.delete("/DeleteIncome/:id", (req, res, next) => {
  //mongoose will use studentID of document
  IncomeModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Create Intake
app.post("/Intake", (req, res, next) => {
  IntakeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Intake is added to the database");
    }
  });
});

// Read Intake by client id
app.get("/Client-Intake/:id", (req, res, next) => {
  IntakeModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get new client ID
app.get("/GetNewClientID", (req, res, next) => {
  IntakeModel.aggregate(
    [{ $group: { _id: null, max: { $max: "$clientID" } } }],
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data[0].max + 1);
      }
    }
  );
});

// Updating Intake
app.put("/UpdateIntake/:id", (req, res, next) => {
  IntakeModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Intake is edited via PUT");
        console.log("Intake successfully updated!", data);
      }
    }
  );
});

//delete Intake by id
app.delete("/DeleteIntake/:id", (req, res, next) => {
  //mongoose will use studentID of document
  IntakeModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Create Residence
app.post("/Residence", (req, res, next) => {
  ResidenceModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Residence is added to the database");
    }
  });
});

// Read Residence by client id
app.get("/Client-Residence/:id", (req, res, next) => {
  ResidenceModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating Residence
app.put("/UpdateResidence/:id", (req, res, next) => {
  ResidenceModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Residence is edited via PUT");
        console.log("Residence successfully updated!", data);
      }
    }
  );
});

//delete Residence by id
app.delete("/DeleteResidence/:id", (req, res, next) => {
  //mongoose will use studentID of document
  ResidenceModel.findOneAndRemove(
    { clientID: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    }
  );
});

// Create Worker
app.post("/Worker", (req, res, next) => {
  WorkerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Worker is added to the database");
    }
  });
});

// Read Worker by client id
app.get("/Client-Worker/:id", (req, res, next) => {
  WorkerModel.find({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Updating Worker
app.put("/UpdateWorker/:id", (req, res, next) => {
  WorkerModel.findOneAndUpdate(
    { clientID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Worker is edited via PUT");
        console.log("Worker successfully updated!", data);
      }
    }
  );
});

//delete Worker by id
app.delete("/DeleteWorker/:id", (req, res, next) => {
  //mongoose will use studentID of document
  WorkerModel.findOneAndRemove({ clientID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

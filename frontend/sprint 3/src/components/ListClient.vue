<template>
  <div class="container row justify-content-center">
    <div class="col-md-9">
      <h3 class="text-center fw-bold">CLIENT LISTS</h3>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Client ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in Clients" :key="client._id">
            <td>{{ client.clientID }}</td>
            <td>{{ client.firstName }}</td>
            <td>{{ client.lastName }}</td>
            <td>{{ client.gender }}</td>
            <td>
              <router-link
                :to="`/client-detail/${client.clientID}`"
                class="btn btn-sm btn-warning me-3"
                >Detail</router-link
              >
              <router-link
                :to="`/edit-client/${client.clientID}`"
                class="btn btn-sm btn-success text-light me-3"
                >Edit</router-link
              >
              <button
                @click.prevent="deleteStudent(client.clientID)"
                class="btn btn-sm btn-danger fw-bold"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <router-link to="/signup" class="btn btn-lg btn-outline-primary"
        >Click Here to Register New Client</router-link
      ><br /><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Clients: [],
    };
  },
  created() {
    let apiURL = "http://localhost:5000/Clients";

    axios
      .get(apiURL)
      .then((res) => {
        this.Clients = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(clientID) {
      // Store the API enpoint.
      let apiURL = "http://localhost:5000/Clients";

      let formURL = `http://localhost:5000/DeleteIntake/${clientID}`;
      let generalURL = `http://localhost:5000/DeleteClient/${clientID}`;
      let residenceURL = `http://localhost:5000/DeleteResidence/${clientID}`;
      let contactURL = `http://localhost:5000/DeleteContactInformation/${clientID}`;
      let employmentURL = `http://localhost:5000/DeleteEmployment/${clientID}`;
      let educationURL = `http://localhost:5000/DeleteEducation/${clientID}`;
      let incomeURL = `http://localhost:5000/DeleteIncome/${clientID}`;
      let healthURL = `http://localhost:5000/DeleteHealth/${clientID}`;
      let familyURL = `http://localhost:5000/DeleteFamily/${clientID}`;

      if (window.confirm("Do you really want to delete this client record?")) {
        axios
          .delete(generalURL)
          .then(() => {
            axios
              .delete(residenceURL)
              .catch((error) => {
                console.log("residenceURL");

                console.log(error);
              })
              .then(() => {
                axios
                  .delete(contactURL)
                  .catch((error) => {
                    console.log("contactURL");

                    console.log(error);
                  })
                  .then(() => {
                    axios
                      .delete(employmentURL)
                      .catch((error) => {
                        console.log(error);
                      })
                      .then(() => {
                        axios
                          .delete(educationURL)
                          .catch((error) => {
                            console.log(error);
                          })
                          .then(() => {
                            axios
                              .delete(incomeURL)
                              .catch((error) => {
                                console.log(error);
                              })
                              .then(() => {
                                axios
                                  .delete(healthURL)
                                  .catch((error) => {
                                    console.log(error);
                                  })
                                  .then(() => {
                                    axios
                                      .delete(familyURL)
                                      .catch((error) => {
                                        console.log(error);
                                      })
                                      .then(() => {
                                        axios.delete(formURL).then(() => {
                                          axios
                                            .get(apiURL)
                                            .then((res) => {
                                              this.Clients = res.data;
                                            })
                                            .catch((error) => {
                                              console.log(error);
                                            });
                                        });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          })
          .catch((error) => {
            console.log("generalURL");
            console.log(error);
          });
      }
    },
  },
};
</script>

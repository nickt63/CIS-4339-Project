<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <form
        @submit.prevent="handleFilter"
        class="row mb-5"
        id="activityFilterFrom"
      >
        <div class="form-group col-md-2">
          <label class="form-label fw-bold text-success mt-2"
            >FILTER ACTIVITY BY:</label
          >
        </div>
        <div class="form-group col-md-2">
          <select class="form-control" v-model="filterBy" @change="onChange()">
            <option value="" selected disabled>-- select a filter --</option>
            <option value="program">Program</option>
            <option value="datetime">Date Time</option>
            <option value="clientID">Client Name</option>
            <option value="managerID">Manager Name</option>
          </select>
        </div>
        <div v-if="showProgram" class="form-group col-md-3">
          <select
            class="form-control"
            v-model="searchBy"
            aria-describedby="programHelpBlock"
          >
            <option value="" selected disabled>-- select a program --</option>
            <option value="Adult Education">Adult Education</option>
            <option value="Family Support Services">
              Family Support Services
            </option>
            <option value="Early Childhood">Early Childhood</option>
            <option value="Youth Services">Youth Services</option>
          </select>
          <small id="programHelpBlock" class="form-text text-muted"
            >Please select the program from list.</small
          >
        </div>
        <div v-if="showDatetime" class="col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Date"
            v-model="searchBy"
            aria-describedby="dateHelpBlock"
            onfocus="(this.type='date')"
            onblur="if(this.value==''){this.type='text'}"
          />
          <small id="dateHelpBlock" class="form-text text-muted"
            >Please select the date of activities.</small
          >
        </div>
        <div v-if="showClient" class="col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="searchBy"
            aria-describedby="clientHelpBlock"
          />
          <small id="clientHelpBlock" class="form-text text-muted"
            >Please enter client's last name.</small
          >
        </div>
        <div v-if="showManager" class="col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="searchBy"
            aria-describedby="managerHelpBlock"
          />
          <small id="managerHelpBlock" class="form-text text-muted"
            >Please enter manager's last name.</small
          >
        </div>
        <div class="col-md-1">
          <button
            type="submit"
            class="btn btn-danger fw-bold"
            :disabled="filterBy == '' || searchBy == ''"
          >
            Search
          </button>
        </div>
        <div class="col-md-1">
          <button @click.prevent="reset" class="btn btn-warning fw-bold">
            Reset
          </button>
        </div>
      </form>
      <hr class="mb-3" />

      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Client Name</th>
            <th>Program</th>
            <th>Short Notes</th>
            <th>Date Time</th>
            <th>Time Spend</th>
            <th>Manager Name</th>
            <th>Services Used</th>
            <th>Handling Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="activity in Activities" :key="activity._id">
            <td>
              {{ activity.clientFirstName }} {{ activity.clientLastName }}
            </td>
            <td>{{ activity.program }}</td>
            <td>{{ activity.shortNotes }}</td>
            <td>{{ activity.datetime }}</td>
            <td>{{ activity.timeSpend }}</td>
            <td>
              {{ activity.workerFirstName }} {{ activity.workerLastName }}
            </td>
            <td>{{ activity.hasUsedServices }}</td>
            <td>{{ activity.handlingStatus }}</td>
          </tr>
        </tbody>
      </table>
      <hr class="mt-3 mb-5" />
    </div>
    <div>
      <!-- canvas element for chart -->
      <canvas id="planet-chart"></canvas>
    </div>
    <hr class="mt-2 mb-4" />

    <div>
      <!-- canvas element for chart -->
      <canvas ref="myChart"></canvas>
    </div>
  </div>
</template>

<script>
//This import gets the chart information from chart.js
import Chart from "chart.js/auto";
import axios from "axios";

export default {
  name: "ActivitySummary",
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },
  async mounted() {
    console.log(this.chartData);
    await new Chart(this.$refs.myChart, {
      type: "bar",
      data: {
        labels: [
          "Adult Education",
          "Family Support Services",
          "Early Childhood",
          "Youth Services",
        ],
        datasets: [
          {
            label: "activity",
            backgroundColor: "rgba(144,238,144 , 0.9 )",
            data: this.chartData,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
  data() {
    return {
      filterBy: "",
      searchBy: "",
      length: "",
      client: "",

      Clients: [],
      Managers: [],
      ClientIDs: [],
      ManagerIDs: [],

      showProgram: false,
      showDatetime: false,
      showClient: false,
      showManager: false,

      Activities: [],
    };
  },
  created() {
    let activityURL = "http://localhost:5000/Client-Event";

    axios
      .get(activityURL)
      .then((res) => {
        this.Activities = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    // The purpose of this method is to show corresponding customized input textbox for each filter option.
    onChange() {
      if (this.filterBy == "program") {
        this.showProgram = true;
        this.showDatetime = false;
        this.showClient = false;
        this.showManager = false;
        this.searchBy = "";
      } else if (this.filterBy == "datetime") {
        this.showProgram = false;
        this.showDatetime = true;
        this.showClient = false;
        this.showManager = false;
        this.searchBy = "";
      } else if (this.filterBy == "clientID") {
        this.showProgram = false;
        this.showDatetime = false;
        this.showClient = true;
        this.showManager = false;
        this.searchBy = "";
      } else {
        this.showProgram = false;
        this.showDatetime = false;
        this.showClient = false;
        this.showManager = true;
        this.searchBy = "";
      }
    },
    handleFilter() {
      if (this.filterBy == "program") {
        let filterURL = `http://localhost:3000/activities/summary-program/${this.searchBy}`;

        axios
          .get(filterURL)
          .then((res) => {
            this.Activities = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.filterBy == "datetime") {
        let filterURL = `http://localhost:3000/activities/summary-datetime/${this.searchBy}`;

        axios
          .get(filterURL)
          .then((res) => {
            this.Activities = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.filterBy == "clientID") {
        // Reset client info list before retrieve the new list.
        this.Clients = [];
        this.ClientIDs = [];

        // The API that get client by last name.
        let clientURL = `http://localhost:3000/clients/lastname/${this.searchBy}`;

        // NOTE:
        // The axios call is asynchronous, in order to get the clientID list,
        // we need to put the forEach() inside the promise resolve function.
        axios
          .get(clientURL)
          .then((res) => {
            // Get a list of client by provided last name.
            this.Clients = res.data;
          })
          .then(() => {
            // Parse the clientID out and store it in the ClientIDs array.
            this.Clients.forEach((client) => {
              this.ClientIDs.push(client.latest.clientID);
            });
          })
          .then(() => {
            // Reset the activity array to empty.
            this.Activities = [];

            this.ClientIDs.forEach((clientID) => {
              let filterURL = `http://localhost:3000/activities/summary-client/${clientID}`;

              axios
                .get(filterURL)
                .then((res) => {
                  // Do not push the empty array.
                  if (res.data.length != 0) {
                    for (let i = 0; i < res.data.length; i++) {
                      this.Activities.push(res.data[i]);
                    }
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.filterBy == "managerID") {
        // Reset client info list before retrieve the new list.
        this.Managers = [];
        this.ManagerIDs = [];

        // The API that get worker by last name.
        let workerURL = `http://localhost:3000/workers/lastname/${this.searchBy}`;

        axios
          .get(workerURL)
          .then((res) => {
            // Get a list of worker by provided last name.
            this.Managers = res.data;
          })
          .then(() => {
            // Parse the clientID out and store it in the ClientIDs array.
            this.Managers.forEach((manager) => {
              this.ManagerIDs.push(manager.workerID);
            });
          })
          .then(() => {
            // Reset the activity array to empty.
            this.Activities = [];

            this.ManagerIDs.forEach((managerID) => {
              let filterURL = `http://localhost:3000/activities/summary-worker/${managerID}`;

              axios
                .get(filterURL)
                .then((res) => {
                  // Do not push the empty array.
                  if (res.data.length != 0) {
                    for (let i = 0; i < res.data.length; i++) {
                      this.Activities.push(res.data[i]);
                    }
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      // Reset the filter option and search keyword.
      this.filterBy = "";
      this.searchBy = "";
      this.showProgram = false;
      this.showDatetime = false;
      this.showClient = false;
      this.showManager = false;
    },
    reset() {
      let activityURL = "http://localhost:3000/activities/summary";

      axios
        .get(activityURL)
        .then((res) => {
          this.Activities = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#activityFilterFrom {
  text-align: left;
}
</style>

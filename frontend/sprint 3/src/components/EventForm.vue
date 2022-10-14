<template>
  <div class="row justify-content-center">
    <div class="col-md-9">
      <hr class="mt-3 mb-4" />
      <form
        @submit.prevent="handleSubmitForm"
        class="row mb-5"
        id="createClientForm"
      >
        <!-- CLIENT INTAKE FROM -->
        <div v-show="step === 1">
          <h4 class="text-success fw-bold">EVENT INTAKE FROM</h4>
          <div class="form-group col-md-3 required">
            <label for="clientID" class="form-label fw-bold mt-3 mb-0"
              >Client ID</label
            >
            <input
              type="number"
              class="form-control"
              id="clientID"
              v-model="clientID"
              disabled
              required
            />
          </div>
          <div class="form-group col-md-3 required">
            <label for="familyID" class="form-label fw-bold mt-3 mb-0"
              >Worker ID</label
            >
            <input
              type="number"
              class="form-control"
              id="familyID"
              v-model="form.workerID"
              disabled
              required
            />
          </div>
          <div class="form-group col-md-3 required">
            <label for="eventDate" class="form-label fw-bold mt-3 mb-0"
              >Event Date</label
            >
            <input
              type="date"
              class="form-control"
              id="eventDate"
              v-model="form.eventDate"
              required
            />
          </div>
          <div class="form-group col-md-3 required">
            <label for="eventDescription" class="form-label fw-bold mt-3 mb-0"
              >Event Description</label
            >
            <input
              type="text"
              class="form-control"
              id="eventDescription"
              v-model="form.eventDescription"
              required
            />
          </div>
          <div class="form-group col-md-3 required">
            <label for="eventAddress" class="form-label fw-bold mt-3 mb-0"
              >Event Address</label
            >
            <input
              type="text"
              class="form-control"
              id="eventAddress"
              v-model="form.eventAddress"
              required
            />
          </div>
          <div class="form-group col-md-3 required">
            <label for="eventZip" class="form-label fw-bold mt-3 mb-0"
              >Zip</label
            >
            <input
              type="number"
              class="form-control"
              id="eventZip"
              v-model="form.eventZip"
              required
            />
          </div>
          <div class="form-group col-md-3 required">
            <label for="endDate" class="form-label fw-bold mt-3 mb-0"
              >Notes</label
            >
            <input
              type="text"
              class="form-control"
              id="shortNotes"
              v-model="form.shortNotes"
              required
            />
          </div>
          <hr class="mt-5 mb-4" />
          <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
            Add Event
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateClient",
  data() {
    return {
      step: 1,
      clientID: "",
      form: {
        clients: "",
        workerID: "",
        clientID: "",
        eventDate: "",
        eventAddress: "",
        eventDescription: "",
        eventZip: "",
        shortNotes: "",
        eventAddress: "",
      },
    };
  },
  created() {
    let clientCounterURL = "http://localhost:5000/GetNewWorkerID";
    let apiURL = "http://localhost:5000/Clients";
    axios
      .get(clientCounterURL)
      .then((res) => {
        this.clientID = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(apiURL)
      .then((res) => {
        this.form.clients = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.form.workerID = Math.floor(Math.random() * 100);
  },
  methods: {
    prev() {
      // Method that helps navigate back on form steps
      this.step--;
    },
    next() {
      // Method that helps navigate foward
      this.step++;
    },
    handleSubmitForm() {
      // Store the API enpoint.
      let formURL = "http://localhost:5000/Event";
      this.form.clientID = this.clientID;
      // Debugging purposes
      console.log(this.form);

      // POST(CREATE): insert intake form record.
      axios
        .post(formURL, this.form)
        .then(() => {
          this.form = {
            clients: "",
            workerID: "",
            clientID: "",
            eventDate: "",
            eventAddress: "",
            eventZip: "",
            shortNotes: "",
            eventAddress: "",
            eventDescription: "",
          };
          this.$router.push("/events");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#createClientForm {
  text-align: left;
}

.form-group.required .form-label:after {
  content: "*";
  color: red;
}

.space {
  width: 20px;
  height: auto;
  display: inline-block;
}
</style>
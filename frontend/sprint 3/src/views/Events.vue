<template>
  <div class="container row justify-content-center">
    <div class="col-md-9">
      <h3 class="text-center fw-bold">CLIENT LISTS</h3>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Client ID</th>
            <th>Event Description</th>
            <th>Event Date</th>
            <th>Event Address</th>
            <th>Event Zip</th>
            <th>Worker ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in Events" :key="event._id">
            <td>{{ event.clientID }}</td>
            <td>{{ event.eventDescription }}</td>
            <td>{{ event.eventDate }}</td>
            <td>{{ event.eventAddress }}</td>
            <td>{{ event.eventZip }}</td>
            <td>{{ event.workerID }}</td>
            <td>
              <button
                @click.prevent="deleteEvent(event.clientID)"
                class="btn btn-sm btn-danger fw-bold"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <router-link to="/addevent" class="btn btn-lg btn-outline-primary"
        >Click Here to Register New Event</router-link
      ><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Events: [],
    };
  },
  created() {
    let apiURL = "http://localhost:5000/Events";

    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data);
        this.Events = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteEvent(clientID) {
      // Store the API enpoint.
      let apiURL = `http://localhost:5000/DeleteEvent/${clientID}`;
      axios.delete(apiURL).then(() => {
        axios
          .get("http://localhost:5000/Events")
          .then((res) => {
            this.Events = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
};
</script>

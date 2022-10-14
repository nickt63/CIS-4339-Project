<template>
  <div class="home">
    
    <br /><br /><br />

    <h1>Welcome to Sprint 3 Group 23</h1>
    <br />

    <router-link to="/signup" class="btn btn-lg btn-outline-primary"
      >Click Here to Register New Client</router-link
    ><br /><br />
    <router-link to="/clients" class="btn btn-lg btn-outline-primary"
      >Click Here to View All Clients</router-link
    ><br />
    <br />
    <router-link to="/addevent" class="btn btn-lg btn-outline-primary"
      >Click Here to Register New Event</router-link
    ><br />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="home">
    <img
      alt="CFC Logo"
      src="../assets/cfcicon.png"
      width="100"
      height="100"
    /><br /><br /><br />

    <h1>Client Added Successfully!</h1>
    <br />

    <router-link to="/signup" class="btn btn-lg btn-warning me-3 mb-3"
      >Click Here to Register New Client</router-link
    ><br />
    <router-link to="/clients" class="btn btn-lg btn-warning me-3"
      >Click Here to View All Clients</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

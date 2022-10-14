<template>
  <div id="signup" class="container">
    <h3 class="text-center fw-bold">CLIENT SIGN UP</h3>
    <IntakeForm />
  </div>
</template>

<script>
import IntakeForm from "@/components/IntakeForm.vue";

export default {
  name: "SignUp",
  components: {
    IntakeForm,
  },
};
</script>

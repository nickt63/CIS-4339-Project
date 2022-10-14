<template>
  <div class="container row justify-content-center" id="clientDetail">
    <div class="col-md-5">
      <h3 class="text-center">CLIENT DETAIL</h3>
      <hr class="mt-3 mb-4" />

      <!-- INTAKE FORM INFORMATION -->
      <h4 class="text-success fw-bold">INTAKE FORM INFORMATION</h4>
      <table class="table" v-for="form in Forms" :key="form._id">
        <tr>
          <th>Client ID</th>
          <td>{{ form.clientID }}</td>
        </tr>
        <tr>
          <th>Family ID</th>
          <td>{{ form.familyID }}</td>
        </tr>
        <tr>
          <th>Start Date</th>
          <td>{{ form.startDate }}</td>
        </tr>
        <tr>
          <th>End Date</th>
          <td>{{ form.endDate }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <!-- GENERAL INFORMATION -->
      <h4 class="text-success fw-bold">GENERAL INFORMATION</h4>
      <table class="table" v-for="general in Generals" :key="general._id">
        <tr>
          <th>First Name</th>
          <td>{{ general.firstName }}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{{ general.lastName }}</td>
        </tr>
        <tr>
          <th>Middle Initial</th>
          <td>{{ general.middleInitial }}</td>
        </tr>
        <tr>
          <th>Birthday</th>
          <td>{{ general.birthday }}</td>
        </tr>
        <tr>
          <th>SSN</th>
          <td>{{ general.ssn }}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{{ general.gender }}</td>
        </tr>
        <tr>
          <th>Driver License</th>
          <td>{{ general.driverLicense }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <!-- RESIDENCE INFORMATION -->
      <h4 class="text-success fw-bold">RESIDENCE INFORMATION</h4>
      <table class="table" v-for="residence in Residences" :key="residence._id">
        <tr>
          <th>Address</th>
          <td>{{ residence.address }}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{{ residence.city }}</td>
        </tr>
        <tr>
          <th>State</th>
          <td>{{ residence.state }}</td>
        </tr>
        <tr>
          <th>County</th>
          <td>{{ residence.county }}</td>
        </tr>
        <tr>
          <th>Zip</th>
          <td>{{ residence.zip }}</td>
        </tr>
        <tr>
          <th>Total Rent</th>
          <td>{{ residence.totalRent }}</td>
        </tr>
        <tr>
          <th>Utilities Included</th>
          <td>{{ residence.utilityStatus }}</td>
        </tr>
        <tr>
          <th>Subsidized</th>
          <td>{{ residence.subsidizedStatus }}</td>
        </tr>
        <tr>
          <th>Single Parent</th>
          <td>{{ residence.isSingleParent }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <!-- CONTACT INFORMATION -->
      <h4 class="text-success fw-bold">CONTACT INFORMATION</h4>
      <table class="table" v-for="contact in Contacts" :key="contact._id">
        <tr>
          <th>Cell Number</th>
          <td>{{ contact.cellNum }}</td>
        </tr>
        <tr>
          <th>Home Number</th>
          <td>{{ contact.homeNum }}</td>
        </tr>
        <tr>
          <th>Personal Email</th>
          <td>{{ contact.personalEmail }}</td>
        </tr>
        <tr>
          <th>Marital Status</th>
          <td>{{ contact.maritalStatus }}</td>
        </tr>
        <tr>
          <th>Language</th>
          <td>{{ contact.language }}</td>
        </tr>
        <tr>
          <th>Priority Population</th>
          <td>{{ contact.priorityPopulation }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <!-- EMPLOYMENT INFORMATION -->
      <h4 class="text-success fw-bold">EMPLOYMENT INFORMATION</h4>
      <table
        class="table"
        v-for="employment in Employments"
        :key="employment._id"
      >
        <tr>
          <th>Employment Status</th>
          <td>{{ employment.employmentStatus }}</td>
        </tr>
        <tr>
          <th>Employment Length</th>
          <td>{{ employment.length }}</td>
        </tr>
        <tr>
          <th>Employer</th>
          <td>{{ employment.employer }}</td>
        </tr>
        <tr>
          <th>Occupation</th>
          <td>{{ employment.occupation }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <!-- EDUCATION INFORMATION -->
      <h4 class="text-success fw-bold">EDUCATION INFORMATION</h4>
      <table class="table" v-for="education in Educations" :key="education._id">
        <tr>
          <th>Attended School</th>
          <td>{{ education.graduationStatus }}</td>
        </tr>
        <tr>
          <th>School</th>
          <td>{{ education.school }}</td>
        </tr>
        <tr>
          <th>Last Grade</th>
          <td>{{ education.lastGrade }}</td>
        </tr>
        <tr>
          <th>Degree</th>
          <td>{{ education.degree }}</td>
        </tr>
        <tr>
          <th>Certification</th>
          <td>{{ education.certification }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <!-- INCOME INFORMATION -->
      <h4 class="text-success fw-bold">INCOME INFORMATION</h4>
      <table class="table" v-for="income in Incomes" :key="income._id">
        <tr>
          <th>Head of Household</th>
          <td>{{ income.headOfHouseholdStatus }}</td>
        </tr>
        <tr>
          <th>Monthly Income</th>
          <td>{{ income.monthlyIncome }}</td>
        </tr>
        <tr>
          <th>Spousal Support</th>
          <td>{{ income.spousalSupport }}</td>
        </tr>
        <tr>
          <th>Worker Compensation</th>
          <td>{{ income.workComp }}</td>
        </tr>
        <tr>
          <th>Child Support</th>
          <td>{{ income.childSupport }}</td>
        </tr>
        <tr>
          <th>TANF</th>
          <td>{{ income.tanf }}</td>
        </tr>
        <tr>
          <th>SSI</th>
          <td>{{ income.ssi }}</td>
        </tr>
        <tr>
          <th>Unemployment</th>
          <td>{{ income.unemployment }}</td>
        </tr>
        <tr>
          <th>Social Security</th>
          <td>{{ income.socialSecurity }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <!-- HEALTH INSURANCE INFORMATION -->
      <h4 class="text-success fw-bold">HEALTH INSURANCE INFORMATION</h4>
      <table class="table" v-for="health in Healthes" :key="health._id">
        <tr>
          <th>Health Insurance</th>
          <td>{{ health.healthInsuranceStatus }}</td>
        </tr>
        <tr>
          <th>Health Insurance Program</th>
          <td>{{ health.healthInsuranceProgram }}</td>
        </tr>
        <tr>
          <th>Food Stamps</th>
          <td>{{ health.foodStampsStatus }}</td>
        </tr>
        <tr>
          <th>Food Stamps Amount</th>
          <td>{{ health.foodStampsAmount }}</td>
        </tr>
      </table>
      <hr class="mt-4 mb-4" />

      <router-link to="/clients" class="btn btn-warning col-md-3 me-5"
        >Back</router-link
      >

      <router-link
        :to="`/edit-client/${this.$route.params.id}`"
        class="btn btn-success text-light col-md-3 me-3"
        >Edit</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ClientDetail",
  data() {
    return {
      Forms: {},
      Generals: {},
      Residences: {},
      Contacts: {},
      Employments: {},
      Education: {},
      Incomes: {},
      Healthes: {},
    };
  },
  created() {
    // Store the API enpoint.
    let formURL = `http://localhost:5000/Client-Intake/${this.$route.params.id}`;
    let generalURL = `http://localhost:5000/Client/${this.$route.params.id}`;
    let residenceURL = `http://localhost:5000/Client-Residence/${this.$route.params.id}`;
    let contactURL = `http://localhost:5000/Client-ContactInformation/${this.$route.params.id}`;
    let employmentURL = `http://localhost:5000/Client-Employment/${this.$route.params.id}`;
    let educationURL = `http://localhost:5000/Client-Education/${this.$route.params.id}`;
    let incomeURL = `http://localhost:5000/Client-Income/${this.$route.params.id}`;
    let healthURL = `http://localhost:5000/Client-Health/${this.$route.params.id}`;

    // GET(READ): get intake form record.
    axios
      .get(formURL)
      .then((res) => {
        this.Forms = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // GET(READ): get client general record.
    axios
      .get(generalURL)
      .then((res) => {
        this.Generals = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // GET(READ): get client residence record.
    axios
      .get(residenceURL)
      .then((res) => {
        this.Residences = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // GET(READ): get client contact record.
    axios
      .get(contactURL)
      .then((res) => {
        this.Contacts = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // GET(READ): get client employement record.
    axios
      .get(employmentURL)
      .then((res) => {
        this.Employments = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // GET(READ): get client education record.
    axios
      .get(educationURL)
      .then((res) => {
        this.Educations = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // GET(READ): get client income record.
    axios
      .get(incomeURL)
      .then((res) => {
        this.Incomes = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // GET(READ): get client health insurance record.
    axios
      .get(healthURL)
      .then((res) => {
        this.Healthes = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#clientDetail {
  text-align: left;
}
</style>

<template>
  <div class="row justify-content-center">
    <div class="col-md-9">
      <h3 class="text-center fw-bold">EDIT CLIENT RECORD</h3>
      <hr class="mt-3 mb-4" />
      <form @submit.prevent="handleUpdate" class="row mb-5" id="updateForm">
        <!-- CLIENT INTAKE FROM -->
        <h4 class="text-success fw-bold">CLIENT INTAKE FROM</h4>
        <div class="form-group col-md-3 required">
          <label for="clientID" class="form-label fw-bold mt-3 mb-0"
            >Client ID</label
          >
          <input
            type="number"
            class="form-control"
            id="clientID"
            v-model="form.clientID"
            readonly
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="familyID" class="form-label fw-bold mt-3 mb-0"
            >Family ID</label
          >
          <input
            type="number"
            class="form-control"
            id="familyID"
            v-model="form.familyID"
            readonly
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="startDate" class="form-label fw-bold mt-3 mb-0"
            >Start Date</label
          >
          <input
            type="date"
            class="form-control"
            id="startDate"
            v-model="form.startDate"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="endDate" class="form-label fw-bold mt-3 mb-0"
            >End Date</label
          >
          <input
            type="date"
            class="form-control"
            id="endDate"
            v-model="form.endDate"
            required
          />
        </div>
        <hr class="mt-5 mb-4" />

        <!-- GENERAL INFORMATION -->
        <h4 class="text-success fw-bold">GENERAL INFORMATION</h4>
        <div class="form-group col-md-4 required">
          <label for="firstName" class="form-label fw-bold mt-3 mb-0"
            >First Name</label
          >
          <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="general.firstName"
            required
          />
        </div>
        <div class="form-group col-md-4 required">
          <label for="lastName" class="form-label fw-bold mt-3 mb-0"
            >Last Name</label
          >
          <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="general.lastName"
            required
          />
        </div>
        <div class="form-group col-md-4 required">
          <label for="middleInitial" class="form-label fw-bold mt-3 mb-0"
            >Middle Initial</label
          >
          <input
            type="text"
            class="form-control"
            id="middleInitial"
            v-model="general.middleInitial"
          />
        </div>
        <div class="form-group col-md-4 required">
          <label for="birthday" class="form-label fw-bold mt-3 mb-0"
            >Birthday</label
          >
          <input
            type="date"
            class="form-control"
            id="birthday"
            v-model="general.birthday"
            required
          />
        </div>
        <div class="form-group col-md-4 required">
          <label for="ssn" class="form-label fw-bold mt-3 mb-0">SSN</label>
          <input
            type="text"
            class="form-control"
            id="ssn"
            v-model="general.ssn"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
            aria-describedby="ssnHelpBlock"
            required
          />
          <small id="ssnHelpBlock" class="form-text text-muted"
            >Format: xxx-xx-xxxx</small
          >
        </div>
        <div class="form-group col-md-4 required">
          <label for="driverLicense" class="form-label fw-bold mt-3 mb-0"
            >Driver License (TXID)</label
          >
          <input
            type="text"
            class="form-control"
            id="driverLicense"
            v-model="general.driverLicense"
            pattern="[0-9]{8}"
            aria-describedby="txIDHelpBlock"
            required
          />
          <small id="txIDHelpBlock" class="form-text text-muted"
            >Driver License (Texas ID): 8-digit number</small
          >
        </div>
        <div class="form-group col-md-4 required">
          <p class="form-label fw-bold mt-3 mb-2">Gender</p>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="genderOptions"
              id="male"
              value="Male"
              v-model="general.gender"
              required
            />
            <label for="male" class="form-check-label">Male</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="genderOptions"
              id="female"
              value="Female"
              v-model="general.gender"
              required
            />
            <label for="female" class="form-check-label">Female</label>
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="zipCode" class="form-label fw-bold mt-3 mb-0"
            >Zipcode</label
          >
          <input
            type="text"
            class="form-control"
            id="zipCode"
            v-model="general.zipCode"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="raceEthnicity" class="form-label fw-bold mt-3 mb-0"
            >Ethnicity</label
          >
          <input
            type="text"
            class="form-control"
            id="raceEthnicity"
            v-model="general.raceEthnicity"
          />
        </div>
        <hr class="mt-5 mb-4" />

        <!-- RESIDENCE INFORMATION -->
        <h4 class="text-success fw-bold">RESIDENCE INFORMATION</h4>
        <div class="form-group col-md-4 required">
          <label for="address" class="form-label fw-bold mt-3 mb-0"
            >Address</label
          >
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="residence.address"
            required
          />
        </div>
        <div class="form-group col-md-2 required">
          <label for="city" class="form-label fw-bold mt-3 mb-0">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            v-model="residence.city"
            required
          />
        </div>
        <div class="form-group col-md-2 required">
          <label for="state" class="form-label fw-bold mt-3 mb-0">State</label>
          <input
            type="text"
            class="form-control"
            id="state"
            v-model="residence.state"
            required
          />
        </div>
        <div class="form-group col-md-2 required">
          <label for="county" class="form-label fw-bold mt-3 mb-0"
            >County</label
          >
          <input
            type="text"
            class="form-control"
            id="county"
            v-model="residence.county"
            required
          />
        </div>
        <div class="form-group col-md-2 required">
          <label for="zip" class="form-label fw-bold mt-3 mb-0">Zip</label>
          <input
            type="number"
            class="form-control"
            id="zip"
            v-model="residence.zip"
            required
          />
        </div>
        <div class="form-group col-md-4 required">
          <label for="totalRent" class="form-label fw-bold mt-3 mb-0"
            >Total Rent</label
          >
          <input
            type="number"
            class="form-control"
            id="totalRent"
            v-model="residence.totalRent"
            aria-describedby="totalRentHelpBlock"
            required
          />
          <small id="totalRentHelpBlock" class="form-text text-muted"
            >Please enter your monthly rent in dollar.</small
          >
        </div>
        <div class="form-group col-md-4">
          <div class="form-check mt-4 mb-0">
            <input
              class="form-check-input"
              type="checkbox"
              id="utilityStatus"
              v-model="residence.utilityStatus"
              value="true"
            />
            <label class="form-check-label fw-bold" for="utilityStatus"
              >Utilities included?</label
            >
          </div>
        </div>
        <div class="form-group col-md-4">
          <div class="form-check mt-4 mb-0">
            <input
              class="form-check-input"
              type="checkbox"
              id="subsidizedStatus"
              v-model="residence.subsidizedStatus"
              value="true"
            />
            <label class="form-check-label fw-bold" for="subsidizedStatus"
              >Is your rent subsidized?</label
            >
          </div>
        </div>
        <div class="form-group col-md-4">
          <div class="form-check mt-4 mb-0">
            <input
              class="form-check-input"
              type="checkbox"
              id="isSingleParent"
              v-model="residence.isSingleParent"
              value="true"
            />
            <label class="form-check-label fw-bold" for="isSingleParent"
              >Are you a single parent?</label
            >
          </div>
        </div>
        <hr class="mt-5 mb-4" />

        <!-- CONTACT INFORMATION -->
        <h4 class="text-success fw-bold">CONTACT INFORMATION</h4>
        <div class="form-group col-md-3 required">
          <label for="cellNum" class="form-label fw-bold mt-3 mb-0"
            >Cell Number</label
          >
          <input
            type="tel"
            class="form-control"
            id="cellNum"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            v-model="contact.cellNum"
            aria-describedby="cellNumHelpBlock"
            required
          />
          <small id="cellNumHelpBlock" class="form-text text-muted"
            >Format: xxx-xxx-xxxx</small
          >
        </div>
        <div class="form-group col-md-3">
          <label for="homeNum" class="form-label fw-bold mt-3 mb-0"
            >Home Number</label
          >
          <input
            type="tel"
            class="form-control"
            id="homeNum"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            v-model="contact.homeNum"
            aria-describedby="homeNumHelpBlock"
          />
          <small id="homeNumHelpBlock" class="form-text text-muted"
            >Format: xxx-xxx-xxxx</small
          >
        </div>
        <div class="form-group col-md-3">
          <label for="workNum" class="form-label fw-bold mt-3 mb-0"
            >Work Number</label
          >
          <input
            type="tel"
            class="form-control"
            id="workNum"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            v-model="contact.workNum"
            aria-describedby="workNumHelpBlock"
          />
          <small id="workNumHelpBlock" class="form-text text-muted"
            >Format: xxx-xxx-xxxx</small
          >
        </div>
        <div class="form-group col-md-3">
          <label for="otherNum" class="form-label fw-bold mt-3 mb-0"
            >Other Number</label
          >
          <input
            type="tel"
            class="form-control"
            id="otherNum"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            v-model="contact.otherNum"
            aria-describedby="workNumHelpBlock"
          />
          <small id="otherNumHelpBlock" class="form-text text-muted"
            >Format: xxx-xxx-xxxx</small
          >
        </div>
        <div class="form-group col-md-6 required">
          <label for="personalEmail" class="form-label fw-bold mt-3 mb-0"
            >Personal Email</label
          >
          <input
            type="email"
            class="form-control"
            id="personalEmail"
            v-model="contact.personalEmail"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="otherEmail" class="form-label fw-bold mt-3 mb-0"
            >Other Email</label
          >
          <input
            type="email"
            class="form-control"
            id="otherEmail"
            v-model="contact.otherEmail"
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="maritalStatus" class="form-label fw-bold mt-3 mb-0"
            >Marital Status</label
          >
          <select
            class="form-control"
            id="maritalStatus"
            v-model="contact.maritalStatus"
            required
          >
            <option disabled selected>-- select an option --</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Seperated">Seperated</option>
            <option value="Divorced">Divorced</option>
            <option value="Widow">Widow</option>
            <option value="Common Law">Common Law</option>
          </select>
        </div>
        <div class="form-group col-md-3 required">
          <label for="language" class="form-label fw-bold mt-3 mb-0"
            >Language</label
          >
          <select
            class="form-control"
            id="language"
            v-model="contact.language"
            required
          >
            <option disabled selected>-- select an option --</option>
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
            <option value="Bilingual">Bilingual</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group col-md-3 required">
          <label for="priorityPopulation" class="form-label fw-bold mt-3 mb-0"
            >Priority Population</label
          >
          <select
            class="form-control"
            id="priorityPopulation"
            v-model="contact.priorityPopulation"
            required
          >
            <option disabled selected>-- select an option --</option>
            <option value="ADA or Handicap">ADA or Handicap</option>
            <option value="Mental Illness">Mental Illness</option>
            <option value="Elderly (Over 55)">Elderly (Over 55)</option>
            <option value="HIV">HIV</option>
            <option value="Homeless">Homeless</option>
            <option value="Veteran">Veteran</option>
            <option value="Harvey Impact">Harvey Impact</option>
          </select>
        </div>
        <hr class="mt-5 mb-4" />

        <!-- EMPLOYMENT INFORMATION -->
        <h4 class="text-success fw-bold">EMPLOYMENT INFORMATION</h4>
        <div class="form-group col-md-6 required">
          <label for="employmentStatus" class="form-label fw-bold mt-3 mb-0"
            >Employment Status</label
          >
          <select
            class="form-control"
            id="employmentStatus"
            v-model="employment.employmentStatus"
            aria-describedby="employmentStatusHelpBlock"
            required
          >
            <option disabled selected>-- select an option --</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Retired">Retired</option>
            <option value="Housewife">Housewife</option>
          </select>
          <small id="employmentStatusHelpBlock" class="form-text text-muted"
            >Please select your current employment status.</small
          >
        </div>
        <div class="form-group col-md-6 required">
          <label for="length" class="form-label fw-bold mt-3 mb-0"
            >How Long</label
          >
          <input
            type="number"
            class="form-control"
            id="length"
            v-model="employment.length"
            aria-describedby="lengthHelpBlock"
            required
          />
          <small id="lengthHelpBlock" class="form-text text-muted"
            >Please provide the length of your current employment status (in
            year).</small
          >
        </div>
        <div class="form-group col-md-6">
          <label for="employer" class="form-label fw-bold mt-3 mb-0"
            >Employer</label
          >
          <input
            type="text"
            class="form-control"
            id="length"
            v-model="employment.employer"
            aria-describedby="employerHelpBlock"
          />
          <small id="employerHelpBlock" class="form-text text-muted"
            >Please provide your employer's info if you are currently
            employed.</small
          >
        </div>
        <div class="form-group col-md-6">
          <label for="occupation" class="form-label fw-bold mt-3 mb-0"
            >Occupation</label
          >
          <input
            type="text"
            class="form-control"
            id="occupation"
            v-model="employment.occupation"
            aria-describedby="occupationHelpBlock"
          />
          <small id="occupationHelpBlock" class="form-text text-muted"
            >Please provide your occupation if you are currently
            employed.</small
          >
        </div>
        <hr class="mt-5 mb-4" />

        <!-- EDUCATION INFORMATION -->
        <h4 class="text-success fw-bold">EDUCATION INFORMATION</h4>
        <div class="form-group col-md-4">
          <label for="school" class="form-label fw-bold mt-3 mb-0"
            >School</label
          >
          <input
            type="text"
            class="form-control"
            id="school"
            v-model="education.school"
            aria-describedby="schoolHelpBlock"
          />
          <small id="schoolHelpBlock" class="form-text text-muted"
            >Please provide your school name if you've attended school.</small
          >
        </div>
        <div class="form-group col-md-4">
          <label for="lastGrade" class="form-label fw-bold mt-3 mb-0"
            >Last Grade</label
          >
          <input
            type="text"
            class="form-control"
            id="lastGrade"
            v-model="education.lastGrade"
            aria-describedby="lastGradeHelpBlock"
          />
          <small id="lastGradeHelpBlock" class="form-text text-muted"
            >Please provide your last completed grade if you've attended
            school.</small
          >
        </div>
        <div class="form-group col-md-4 required">
          <p class="form-label fw-bold mt-3 mb-2">Have you graduated?</p>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="graduatedOptions"
              id="graduationStatus"
              value="true"
              v-model="education.graduationStatus"
              required
            />
            <label for="graduationStatus" class="form-check-label">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="graduatedOptions"
              id="hasNotGraduated"
              value="false"
              v-model="education.graduationStatus"
              required
            />
            <label for="hasNotGraduated" class="form-check-label">No</label>
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="degree" class="form-label fw-bold mt-3 mb-0"
            >Degree</label
          >
          <select
            class="form-control"
            id="degree"
            v-model="education.degree"
            aria-describedby="degreeHelpBlock"
          >
            <option disabled selected>-- select an option --</option>
            <option value="Elementary (0-8)">Elementary (0-8)</option>
            <option value="High School / GED">High School / GED</option>
            <option value="Attend College">Attend College</option>
            <option value="Technical School">Technical School</option>
            <option value="Associate Degree">Associate Degree</option>
            <option value="Bachelor Degree">Bachelor Degree</option>
            <option value="Master Degree">Master Degree</option>
            <option value="PHD">PHD</option>
            <option value="Other">Other</option>
          </select>
          <small id="degreeHelpBlock" class="form-text text-muted"
            >Please select your highest degree if you've graduated.</small
          >
        </div>
        <div class="form-group col-md-4">
          <label for="certification" class="form-label fw-bold mt-3 mb-0"
            >Certification</label
          >
          <input
            type="text"
            class="form-control"
            id="certification"
            v-model="education.certification"
            aria-describedby="certificationHelpBlock"
          />
          <small id="certificationHelpBlock" class="form-text text-muted"
            >Please provide other certificates you have obtained.</small
          >
        </div>
        <hr class="mt-5 mb-4" />

        <!-- INCOME INFORMATION -->
        <h4 class="text-success fw-bold">INCOME INFORMATION</h4>
        <div class="form-group col-md-4 required">
          <p class="form-label fw-bold mt-3 mb-2">Are you head of household?</p>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="headOfHouseholdOptions"
              id="headOfHouseholdStatus"
              value="true"
              v-model="income.headOfHouseholdStatus"
              required
            />
            <label for="headOfHouseholdStatus" class="form-check-label"
              >Yes</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="headOfHouseholdOptions"
              id="headOfHouseholdStatus"
              value="false"
              v-model="income.headOfHouseholdStatus"
              required
            />
            <label for="isNotHeadOfHousehold" class="form-check-label"
              >No</label
            >
          </div>
        </div>
        <div class="form-group col-md-8 required">
          <label for="monthlyIncome" class="form-label fw-bold mt-3 mb-0"
            >Monthly Income</label
          >
          <input
            type="number"
            class="form-control"
            id="monthlyIncome"
            v-model="income.monthlyIncome"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="spousalSupport" class="form-label fw-bold mt-3 mb-0"
            >Spousal Support</label
          >
          <input
            type="number"
            class="form-control"
            id="spousalSupport"
            v-model="income.spousalSupport"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="workComp" class="form-label fw-bold mt-3 mb-0"
            >Worker Compensation</label
          >
          <input
            type="number"
            class="form-control"
            id="workComp"
            v-model="income.workComp"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="childSupport" class="form-label fw-bold mt-3 mb-0"
            >Child Support</label
          >
          <input
            type="number"
            class="form-control"
            id="childSupport"
            v-model="income.childSupport"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="tanf" class="form-label fw-bold mt-3 mb-0">TANF</label>
          <input
            type="number"
            class="form-control"
            id="tanf"
            v-model="income.tanf"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="ssi" class="form-label fw-bold mt-3 mb-0">SSI</label>
          <input
            type="number"
            class="form-control"
            id="ssi"
            v-model="income.ssi"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="unemployment" class="form-label fw-bold mt-3 mb-0"
            >Unemployment</label
          >
          <input
            type="number"
            class="form-control"
            id="unemployment"
            v-model="income.unemployment"
            required
          />
        </div>
        <div class="form-group col-md-3 required">
          <label for="socialSecurity" class="form-label fw-bold mt-3 mb-0"
            >Social Security</label
          >
          <input
            type="number"
            class="form-control"
            id="socialSecurity"
            v-model="income.socialSecurity"
            required
          />
        </div>
        <hr class="mt-5 mb-4" />

        <!-- HEALTH INSURANCE INFORMATION -->
        <h4 class="text-success fw-bold">HEALTH INSURANCE INFORMATION</h4>
        <div class="form-group col-md-4 required">
          <p class="form-label fw-bold mt-3 mb-2">
            Do you have health insurance?
          </p>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="healthInsuranceOptions"
              id="healthInsuranceStatus"
              value="true"
              v-model="health.healthInsuranceStatus"
              required
            />
            <label for="healthInsuranceStatus" class="form-check-label"
              >Yes</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="healthInsuranceOptions"
              id="hasNotHealthInsurance"
              value="false"
              v-model="health.healthInsuranceStatus"
              required
            />
            <label for="hasNotHealthInsurance" class="form-check-label"
              >No</label
            >
          </div>
        </div>
        <div class="form-group col-md-8">
          <label
            for="healthInsuranceProgram"
            class="form-label fw-bold mt-3 mb-0"
            >Health Insurance Program</label
          >
          <select
            class="form-control"
            id="healthInsuranceProgram"
            v-model="health.healthInsuranceProgram"
            aria-describedby="healthInsuranceProgramHelpBlock"
          >
            <option disabled selected>-- select an option --</option>
            <option value="Private Insurance">Private Insurance</option>
            <option value="Medicaid">Medicaid</option>
            <option value="Medicare">Medicare</option>
            <option value="Chip">Chip</option>
            <option value="Gold Card">Gold Card</option>
            <option value="WIC">WIC</option>
          </select>
          <small
            id="healthInsuranceProgramHelpBlock"
            class="form-text text-muted"
            >Please select your health insurance program if you have
            insurance.</small
          >
        </div>
        <div class="form-group col-md-4 required">
          <p class="form-label fw-bold mt-3 mb-2">
            Do you receive food stampt?
          </p>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="foodStampsOptions"
              id="foodStampsStatus"
              value="true"
              v-model="health.foodStampsStatus"
              required
            />
            <label for="foodStampsStatus" class="form-check-label">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="foodStampsOptions"
              id="hasNotFoodStamps"
              value="false"
              v-model="health.foodStampsStatus"
              required
            />
            <label for="hasNotFoodStamps" class="form-check-label">No</label>
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="foodStampsAmount" class="form-label fw-bold mt-3 mb-0"
            >Food Stamps Amount</label
          >
          <input
            type="number"
            class="form-control"
            id="foodStampsAmount"
            v-model="health.foodStampsAmount"
            aria-describedby="foodStampsAmountHelpBlock"
          />
          <small id="foodStampsAmountHelpBlock" class="form-text text-muted"
            >Please provide your food stamps amount if you receive food
            stamps.</small
          >
        </div>
        <hr class="mt-5 mb-4" />
        <button type="submit" class="btn btn-danger mt-3 mb-0">Update</button>
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
      form: {
        familyID: "",
        clientID: "",
        startDate: "",
        endDate: "",
      },
      general: {
        clientID: "",
        firstName: "",
        lastName: "",
        middleInitial: "",
        birthday: "",
        ssn: "",
        driverLicense: "",
        gender: "",
        raceEthnicity: "",
        zipCode: "",
      },
      residence: {
        clientID: "",
        address: "",
        city: "",
        state: "",
        county: "",
        zip: "",
        totalRent: "",
        utilityStatus: "false",
        subsidizedStatus: "false",
        isSingleParent: "false",
      },
      contact: {
        clientID: "",
        homeNum: "",
        cellNum: "",
        personalEmail: "",
        maritalStatus: "",
        language: "",
        priorityPopulation: "",
      },
      employment: {
        clientID: "",
        employmentStatus: "",
        length: "",
        employer: "",
        occupation: "",
      },
      education: {
        clientID: "",
        school: "",
        lastGrade: "",
        graduationStatus: "",
        degree: "",
        certification: "",
      },
      income: {
        clientID: "",
        headOfHouseholdStatus: "",
        monthlyIncome: "",
        spousalSupport: "",
        workComp: "",
        childSupport: "",
        tanf: "",
        ssi: "",
        unemployment: "",
        socialSecurity: "",
      },
      health: {
        clientID: "",
        healthInsuranceStatus: "",
        healthInsuranceProgram: "",
        foodStampsStatus: "",
        foodStampsAmount: "",
      },
    };
  },
  created() {
    let formURL = `http://localhost:5000/Client-Intake/${this.$route.params.id}`;
    let generalURL = `http://localhost:5000/Client/${this.$route.params.id}`;
    let residenceURL = `http://localhost:5000/Client-Residence/${this.$route.params.id}`;
    let contactURL = `http://localhost:5000/Client-ContactInformation/${this.$route.params.id}`;
    let employmentURL = `http://localhost:5000/Client-Employment/${this.$route.params.id}`;
    let educationURL = `http://localhost:5000/Client-Education/${this.$route.params.id}`;
    let incomeURL = `http://localhost:5000/Client-Income/${this.$route.params.id}`;
    let healthURL = `http://localhost:5000/Client-Health/${this.$route.params.id}`;

    // GET(READ): get specific intake form record by client ID.
    axios.get(formURL).then((res) => {
      this.form.familyID = res.data[0].familyID;
      this.form.clientID = res.data[0].clientID;
      this.form.startDate = res.data[0].startDate;
      this.form.endDate = res.data[0].endDate;
    });

    // GET(READ): get specific client general record by client ID.
    axios.get(generalURL).then((res) => {
      this.general.clientID = res.data[0].clientID;
      this.general.firstName = res.data[0].firstName;
      this.general.lastName = res.data[0].lastName;
      this.general.middleInitial = res.data[0].middleInitial;
      this.general.birthday = new Date(
        +new Date() - Math.floor(Math.random() * 10000000000)
      )
        .toISOString()
        .substring(0, 10);
      this.general.ssn = res.data[0].ssn;
      this.general.driverLicense = res.data[0].driverLicense;
      this.general.raceEthnicity = res.data[0].raceEthnicity;
      this.general.zipCode = res.data[0].zipCode;
      this.general.gender = res.data[0].gender;
    });

    // GET(READ): get specific client residence record by client ID.
    axios.get(residenceURL).then((res) => {
      this.residence.clientID = res.data[0].clientID;
      this.residence.address = res.data[0].address;
      this.residence.city = res.data[0].city;
      this.residence.state = res.data[0].state;
      this.residence.county = res.data[0].county;
      this.residence.zip = res.data[0].zip;
      this.residence.totalRent = res.data[0].totalRent;
      this.residence.utilityStatus = res.data[0].utilityStatus;
      this.residence.subsidizedStatus = res.data[0].subsidizedStatus;
      this.residence.isSingleParent = res.data[0].isSingleParent;
    });

    // GET(READ): get specific client contact record by client ID.
    axios.get(contactURL).then((res) => {
      this.contact.clientID = res.data[0].clientID;
      this.contact.homeNum = res.data[0].homeNum;
      this.contact.cellNum = res.data[0].cellNum;
      this.contact.personalEmail = res.data[0].personalEmail;
      this.contact.maritalStatus = res.data[0].maritalStatus;
      this.contact.language = res.data[0].language;
      this.contact.priorityPopulation = res.data[0].priorityPopulation;
    });

    // GET(READ): get specific client employment record by client ID.
    axios.get(employmentURL).then((res) => {
      this.employment.clientID = res.data[0].clientID;
      this.employment.employmentStatus = res.data[0].employmentStatus;
      this.employment.length = res.data[0].length;
      this.employment.employer = res.data[0].employer;
      this.employment.occupation = res.data[0].occupation;
    });

    // GET(READ): get specific client education record by client ID.
    axios.get(educationURL).then((res) => {
      this.education.clientID = res.data[0].clientID;
      this.education.school = res.data[0].school;
      this.education.lastGrade = res.data[0].lastGrade;
      this.education.graduationStatus = res.data[0].graduationStatus;
      this.education.degree = res.data[0].degree;
      this.education.certification = res.data[0].certification;
    });

    // GET(READ): get specific client income record by client ID.
    axios.get(incomeURL).then((res) => {
      this.income.clientID = res.data[0].clientID;
      this.income.headOfHouseholdStatus = res.data[0].headOfHouseholdStatus;
      this.income.monthlyIncome = res.data[0].monthlyIncome;
      this.income.spousalSupport = res.data[0].spousalSupport;
      this.income.workComp = res.data[0].workComp;
      this.income.childSupport = res.data[0].childSupport;
      this.income.tanf = res.data[0].tanf;
      this.income.ssi = res.data[0].ssi;
      this.income.unemployment = res.data[0].unemployment;
      this.income.socialSecurity = res.data[0].socialSecurity;
    });

    // GET(READ): get specific client health record by client ID.
    axios.get(healthURL).then((res) => {
      this.health.clientID = res.data[0].clientID;
      this.health.healthInsuranceStatus = res.data[0].healthInsuranceStatus;
      this.health.healthInsuranceProgram = res.data[0].healthInsuranceProgram;
      this.health.foodStampsStatus = res.data[0].foodStampsStatus;
      this.health.foodStampsAmount = res.data[0].foodStampsAmount;
    });
  },
  methods: {
    handleUpdate() {
      // Store the API enpoint.
      let formURL = `http://localhost:5000/UpdateIntake/${this.$route.params.id}`;
      let generalURL = `http://localhost:5000/UpdateClient/${this.$route.params.id}`;
      let residenceURL = `http://localhost:5000/UpdateResidence/${this.$route.params.id}`;
      let contactURL = `http://localhost:5000/UpdateContactInformation/${this.$route.params.id}`;
      let employmentURL = `http://localhost:5000/UpdateEmployment/${this.$route.params.id}`;
      let educationURL = `http://localhost:5000/UpdateEducation/${this.$route.params.id}`;
      let incomeURL = `http://localhost:5000/UpdateIncome/${this.$route.params.id}`;
      let healthURL = `http://localhost:5000/UpdateHealth/${this.$route.params.id}`;

      // POST(CREATE): insert intake form record.
      axios.put(formURL, this.form).catch((error) => {
        console.log(error);
      });

      // POST(CREATE): insert client general record.
      axios.put(generalURL, this.general).catch((error) => {
        console.log(error);
      });

      // POST(CREATE): insert client residence record.
      axios.put(residenceURL, this.residence).catch((error) => {
        console.log(error);
      });

      // POST(CREATE): insert client contact record.
      axios.put(contactURL, this.contact).catch((error) => {
        console.log(error);
      });

      // POST(CREATE): insert client employment record.
      axios.put(employmentURL, this.employment).catch((error) => {
        console.log(error);
      });

      // POST(CREATE): insert client education record.
      axios.put(educationURL, this.education).catch((error) => {
        console.log(error);
      });

      // POST(CREATE): insert client income record.
      axios.put(incomeURL, this.income).catch((error) => {
        console.log(error);
      });

      // POST(CREATE): insert client health insurance record.
      axios.put(healthURL, this.health).catch((error) => {
        console.log(error);
      });

      this.$router.push("/clients");
    },
  },
};
</script>

<style scoped>
#updateForm {
  text-align: left;
}

.form-group.required .form-label:after {
  content: "*";
  color: red;
}
</style>

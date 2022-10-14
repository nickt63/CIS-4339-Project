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
          <form @submit.prevent="next" class="row mb-5" id="createClientForm">
            <h4 class="text-success fw-bold">CLIENT INTAKE FROM</h4>
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
                >Family ID</label
              >
              <input
                type="number"
                class="form-control"
                id="familyID"
                v-model="form.familyID"
                disabled
                required
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
            <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
              Continue
            </button>
          </form>
        </div>

        <div v-show="step === 2">
          <form @submit.prevent="next" class="row mb-5" id="createClientForm">
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
            <div>
              <button
                @click.prevent="prev()"
                type="button"
                class="btn btn-danger fw-bold mt-3 mb-0"
              >
                Previous
              </button>
              <div class="space" />
              <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
                Next
              </button>
            </div>
          </form>
        </div>

        <div v-show="step === 3">
          <!-- RESIDENCE INFORMATION -->
          <form @submit.prevent="next" class="row mb-5" id="createClientForm">
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
              <label for="city" class="form-label fw-bold mt-3 mb-0"
                >City</label
              >
              <input
                type="text"
                class="form-control"
                id="city"
                v-model="residence.city"
                required
              />
            </div>
            <div class="form-group col-md-2 required">
              <label for="state" class="form-label fw-bold mt-3 mb-0"
                >State</label
              >
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
            <div>
              <button
                @click.prevent="prev()"
                type="button"
                class="btn btn-danger fw-bold mt-3 mb-0"
              >
                Previous
              </button>
              <div class="space" />
              <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
                Next
              </button>
            </div>
          </form>
        </div>

        <div v-show="step === 4">
          <form @submit.prevent="next" class="row mb-5" id="createClientForm">
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
              <label for="ethnicity" class="form-label fw-bold mt-3 mb-0"
                >Ethnicity</label
              >
              <select
                class="form-control"
                id="ethnicity"
                v-model="contact.ethnicity"
                required
              >
                <option disabled selected>-- select an option --</option>
                <option value="Hispanic or Latino">Hispanic or Latino</option>
                <option value="White or Non-Hispanic">
                  White or Non-Hispanic
                </option>
                <option value="African American">African American</option>
                <option value="Asian">Asian</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="form-group col-md-3 required">
              <label
                for="priorityPopulation"
                class="form-label fw-bold mt-3 mb-0"
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
            <div class="form-group col-md-3 required">
              <p class="form-label fw-bold mt-3 mb-2">Pregnancy</p>
              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  name="pregnancyOptions"
                  id="isPregnancy"
                  value="true"
                  v-model="contact.isPregnancy"
                  required
                />
                <label for="isPregnancy" class="form-check-label">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  name="pregnancyOptions"
                  id="isNotPregnancy"
                  value="false"
                  v-model="contact.isPregnancy"
                  required
                />
                <label for="isNotPregnancy" class="form-check-label">No</label>
              </div>
            </div>
            <div class="form-group col-md-3 required">
              <p class="form-label fw-bold mt-3 mb-2">Teen Parent</p>
              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  name="teenParentOptions"
                  id="isTeenParent"
                  value="true"
                  v-model="contact.isTeenParent"
                  required
                />
                <label for="isTeenParent" class="form-check-label">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  name="teenParentOptions"
                  id="isNotTeenParent"
                  value="false"
                  v-model="contact.isTeenParent"
                  required
                />
                <label for="isNotTeenParent" class="form-check-label">No</label>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="deliveryMonth" class="form-label fw-bold mt-3 mb-0"
                >Delivery Date in Month</label
              >
              <select
                class="form-control"
                id="deliveryMonth"
                v-model="contact.deliveryMonth"
                aria-describedby="deliveryMonthHelpBlock"
              >
                <option disabled selected>-- select an option --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              <small id="deliveryMonthHelpBlock" class="form-text text-muted"
                >Please specify the estimated date of delivery if you are
                pregnant.</small
              >
            </div>
            <hr class="mt-5 mb-4" />
            <div>
              <button
                @click.prevent="prev()"
                type="button"
                class="btn btn-danger fw-bold mt-3 mb-0"
              >
                Previous
              </button>
              <div class="space" />

              <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
                Next
              </button>
            </div>
          </form>
        </div>

        <div v-show="step === 5">
          <form @submit.prevent="next" class="row mb-5" id="createClientForm">
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
            <div>
              <button
                @click.prevent="prev()"
                type="button"
                class="btn btn-danger fw-bold mt-3 mb-0"
              >
                Previous
              </button>
              <div class="space" />

              <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
                Next
              </button>
            </div>
          </form>
        </div>

        <div v-show="step === 6">
          <!-- EDUCATION INFORMATION -->
          <form @submit.prevent="next" class="row mb-5" id="createClientForm">
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
                >Please provide your school name if you've attended
                school.</small
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
                <label for="graduationStatus" class="form-check-label"
                  >Yes</label
                >
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
            <div>
              <button
                @click.prevent="prev()"
                type="button"
                class="btn btn-danger fw-bold mt-3 mb-0"
              >
                Previous
              </button>
              <div class="space" />

              <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
                Next
              </button>
            </div>
          </form>
        </div>

        <div v-show="step === 7">
          <form @submit.prevent="next" class="row mb-5" id="createClientForm">
            <!-- INCOME INFORMATION -->
            <h4 class="text-success fw-bold">INCOME INFORMATION</h4>
            <div class="form-group col-md-4 required">
              <p class="form-label fw-bold mt-3 mb-2">
                Are you head of household?
              </p>
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
              <label for="tanf" class="form-label fw-bold mt-3 mb-0"
                >TANF</label
              >
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
            <div>
              <button
                @click.prevent="prev()"
                type="button"
                class="btn btn-danger fw-bold mt-3 mb-0"
              >
                Previous
              </button>
              <div class="space" />

              <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
                Next
              </button>
            </div>
          </form>
        </div>
        <div v-show="step === 8">
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
          <button
            @click.prevent="prev()"
            type="button"
            class="btn btn-danger fw-bold mt-3 mb-0"
          >
            Previous
          </button>
          <div class="space" />

          <button type="submit" class="btn btn-danger fw-bold mt-3 mb-0">
            Sign Up
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
      family: {
        clientID: "",
        familyMember: [],
      },
    };
  },
  created() {
    let clientCounterURL = "http://localhost:5000/GetNewClientID";
    let familyCounterURL = "http://localhost:5000/GetNewFamilyID";

    axios
      .get(clientCounterURL)
      .then((res) => {
        this.clientID = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(familyCounterURL)
      .then((res) => {
        this.form.familyID = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
      let formURL = "http://localhost:5000/Intake";
      let generalURL = "http://localhost:5000/Client";
      let residenceURL = "http://localhost:5000/Residence";
      let contactURL = "http://localhost:5000/ContactInformation";
      let employmentURL = "http://localhost:5000/Employment";
      let educationURL = "http://localhost:5000/Education";
      let incomeURL = "http://localhost:5000/Income";
      let healthURL = "http://localhost:5000/Health";
      let familyURL = "http://localhost:5000/Family";

      // Store the client ID.
      this.form.clientID = this.clientID;
      this.general.clientID = this.clientID;
      this.residence.clientID = this.clientID;
      this.contact.clientID = this.clientID;
      this.employment.clientID = this.clientID;
      this.education.clientID = this.clientID;
      this.income.clientID = this.clientID;
      this.health.clientID = this.clientID;
      this.family.clientID = this.clientID;

      // Debugging purposes
      console.log(this.form);
      console.log(this.general);
      console.log(this.residence);
      console.log(this.contact);
      console.log(this.employment);
      console.log(this.education);
      console.log(this.income);
      console.log(this.health);
      console.log(this.family);

      // POST(CREATE): insert intake form record.
      axios
        .post(formURL, this.form)
        .then(() => {
          this.form = {
            familyID: "",
            clientID: "",
            startDate: "",
            endDate: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client general record.
      axios
        .post(generalURL, this.general)
        .then(() => {
          this.general = {
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
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client residence record.
      axios
        .post(residenceURL, this.residence)
        .then(() => {
          this.residence = {
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
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client contact record.
      axios
        .post(contactURL, this.contact)
        .then(() => {
          this.contact = {
            clientID: "",
            homeNum: "",
            cellNum: "",
            personalEmail: "",
            maritalStatus: "",
            language: "",
            priorityPopulation: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client employment record.
      axios
        .post(employmentURL, this.employment)
        .then(() => {
          this.employment = {
            clientID: "",
            employmentStatus: "",
            length: "",
            employer: "",
            occupation: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client education record.
      axios
        .post(educationURL, this.education)
        .then(() => {
          this.education = {
            clientID: "",
            school: "",
            lastGrade: "",
            graduationStatus: "",
            degree: "",
            certification: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client income record.
      axios
        .post(incomeURL, this.income)
        .then(() => {
          this.income = {
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
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client health insurance record.
      axios
        .post(healthURL, this.health)
        .then(() => {
          this.health = {
            clientID: "",
            healthInsuranceStatus: "",
            healthInsuranceProgram: "",
            foodStampsStatus: "",
            foodStampsAmount: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      // POST(CREATE): insert client family member record.
      axios.post(familyURL, this.family).catch((error) => {
        console.log(error);
      });
      this.$router.push("/clientadded");
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

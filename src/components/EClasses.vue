<template>
<div>
  

  <div id="content">
  <p class="font-weight-black">Enrolled Classes</p>
  
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Abv</th>
          <th class="text-center">Number</th>
          <th class="text-center">Description</th>
          <th class="text-center">Total Seats</th>
          <th class="text-center">Remaining Seats</th>
          <th class="text-center">Time</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </template>
  </v-simple-table>

  <v-btn @click="myRemoveHandler" v-bind:disabled="userSelections.length == 0" class="ma-2" outlined color="blue">Remove Selection(s)</v-btn>

  </div>
</div>
</template>

<script>
import { AppDB } from "../db-init.js";
export default {
  data: function() {
    return {
      abv: "",
      number: 0,
      totalSeats: 0,
      remainingSeats: 0,
      date: "",
      userSelections: []
    };

  },
  methods: {
  myRemoveHandler () {
    this.userSelections.forEach((victimKey) => {
        AppDB.ref('budget').child(victimKey).remove();
      })
    },
  },
    mounted() {
  }
};
</script>

<style>
nav {
  text-align: center;
}

nav {
  padding: 5px;
  margin: 5px;
}

nav a {
  padding: 5px;
  margin: 5px;
}

table {
  padding: 5px;
  margin: auto;
  text-align: center;
}

th {
  padding: 5px;
  margin: 5px;
  text-align: center;
}

#content {
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}

</style>
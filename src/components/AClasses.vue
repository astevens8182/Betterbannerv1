<template>
<div>

  <div id="content">
    <p class="font-weight-black">Available Classes</p>
  
    <!-- <table>
      <thead>
          <tr>
            <th>Abv</th>
            <th>Number</th>
            <th>Description</th>
            <th>Total Seats</th>
            <th>Remaining Seats</th>
            <th>Time</th>
            <th>Select</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(myClass,pos) in myClass" :key="pos">
          <td>{{ myClass.abv }}</td>
          <td>{{ myClass.numbers }}</td>
          <td>{{ myClass.description}}</td>
          <td>{{ myClass.totalSeats }}</td>
          <td>{{ myClass.remainingSeats }}</td>
          <td>{{ myClass.meetingTime }}</td>
        </tr>
      </tbody>
    </table>

    <v-btn id ="enroll" class="ma-2" outlined color="blue">Enroll</v-btn> -->
  
  <div id="table">
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
          <tr v-for="(myClass,pos) in myClass" :key="pos">
            <td>{{ myClass.abv }}</td>
            <td>{{ myClass.numbers }}</td>
            <td>{{ myClass.description}}</td>
            <td>{{ myClass.totalSeats }}</td>
            <td>{{ myClass.remainingSeats }}</td>
            <td>{{ myClass.meetingTime }}</td>
            <td><input type="checkbox" v-bind:id="myClass.mykey" v-on:change="selectionHandler" /></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>

  <v-btn v-bind:disabled="userSelections.length == 0" 
    @click="yourButtonHandler" 
    v-show="isLoggedIn === true" 
    class="ma-2" outlined color="blue">Enroll</v-btn>

  </div>
</div>
</template>

<script>
import { AppDB } from "../db-init.js";
import { AppAUTH } from "../db-init.js";

export default {
  data: function() {
    return {
      myClass: [],
      abv: "",
      numbers: 0,
      description: "",
      totalSeats: 0,
      remainingSeats: 0,
      meetingTime: "",
      isLoggedIn: false,
      userSelections: []
    };
  },
  
  methods: {
    dataHandler(snapshot) {
      const item = snapshot.val();
      this.myClass.push({ ...item, mykey: snapshot.key });
    },
  
    yourButtonHandler() {
      // need for loop & user to classes table and data
      AppDB.ref("enrolled")
        .push()
        .set({
          abv: this.abv,
          meetingTime: this.meetingTime,
          description: this.description,
          numbers: this.numbers,
          remainingSeats: this.remainingSeats,
          totalSeats: this.totalSeats
      });    
    },

    selectionHandler (changeEvent) {
      // The ID of the checkbox is also the key of the record in Firebase
      const whichKey = changeEvent.target.id;
      if (changeEvent.target.checked) {
      // add the selected key to the array
        this.userSelections.push(whichKey);
      } else {
      // remove the deselected key from the array
          this.userSelections = this.userSelections.filter(a => {a.whichKey == whichKey});        
      }
    }, 
  },

  mounted() {
    AppDB.ref("classes").on("child_added", this.dataHandler);
    AppAUTH.onAuthStateChanged((u) => {
      if (u == null) this.isLoggedIn = false;
      else this.isLoggedIn = true;
    });         
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
  background: darkblue;
}

th {
  padding: 5px;
  margin: 5px;
  text-align: center;
}

#content {
  text-align: left;
  max-width: 600px;
  margin-left: 20px;
  margin-right: auto;
  margin-top: auto;
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}
</style>
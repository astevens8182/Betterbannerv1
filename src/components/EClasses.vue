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
  <tr v-for="(myClasses,pos) in myClasses" :key="pos">
            <td>{{ myClasses.abv }}</td>
            <td>{{ myClasses.numbers }}</td>
            <td>{{ myClasses.description}}</td>
            <td>{{ myClasses.totalSeats }}</td>
            <td>{{ myClasses.remainingSeats }}</td>
            <td>{{ myClasses.meetingTime }}</td>
          </tr>
      </tbody>
    </template>
  </v-simple-table>

  <v-btn @click="myRemoveHandler"  class="ma-2" outlined color="blue">Remove Selection(s)</v-btn>

  </div>
</div>
</template>

<script>
import { AppDB, AppAUTH } from "../db-init.js";

export default {
  data: function() {
    return {
      classList: [],
      holderEnrolled: [],
      myClasses: [],
      enrolledClasses: [],
      abv: "",
      number: 0,
      totalSeats: 0,
      remainingSeats: 0,
      date: "",
      userSelections: []
    };

  },
  methods: {
     dataHandlerClassList(snapshot) {
      const item = snapshot.val();
      this.classList.push({ ...item, mykey: snapshot.key });
    },
    dataHandlerEnrolledClasses(snapshot){
      const item = snapshot.val();
      this.holderEnrolled.push({...item, mykey: snapshot.key});
      this.enrolledClasses = this.holderEnrolled.filter(z => z.userKey === AppAUTH.currentUser.uid);
   },

  myRemoveHandler () {
    this.userSelections.forEach((victimKey) => {
        AppDB.ref('budget').child(victimKey).remove();
      })
    },
  
  },
    mounted() {
          AppDB.ref("classes").on("child_added", this.dataHandlerClassList);
          AppDB.ref("userToClasses").on("child_added", this.dataHandlerEnrolledClasses);
          for(let i = 0; i <= this.enrolledClasses.length; i++){
            let temp = this.classList.find(s => s.mykey === this.enrolledClasses[i].classKey);
            this.myClasses.push(temp);
          }
      


          
  },

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
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}

</style>
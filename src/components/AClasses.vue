<template>
<div>
  <div>
      <nav>        
          <a class="title" @click="goHome">Home</a>
          <a class="title" @click="goAClasses">Available Classes</a>
          <a class="title" @click="goEClasses">Enrolled Classes</a>
          <a class="title" >Delete Account</a>
      </nav>
  </div>
<<<<<<< HEAD
<div>
  <h2>Available Classes</h2>
</div>

=======

  <div id="content">
  <h3>Available Classes</h3>
  
>>>>>>> 4f21679a6cac5c39338612042a33326fb2262e8e
  <table>
    <thead>
        <tr>
          <th>Abv</th>
          <th>Number</th>
          <th>Total Seats</th>
          <th>Remaining Seats</th>
          <th>Time</th>
        </tr>
    </thead>
  <tbody>
   <tr v-for="(x,pos) in myClass" :key="pos">
    <td>{{ myClass.abv }}</td>
    <td>{{ myClass.number }}</td>
    <td>{{ myClass.totalSeats }}</td>
    <td>{{ myClass.remainingSeats }}</td>
    <td>{{ myClass.date }}</td>

  </tr>

  
</tbody>
  </table>

  <div id="enroll">
    <v-btn id ="enroll" class="ma-2 text-left" outlined color="blue">Enroll</v-btn>
  </div>

  </div>
</div>
</template>

<script>
import { AppDB } from "../db-init.js";

export default {
  data: function() {
    return {
      myClass: [],
      abv: "",
      number: 0,
      totalSeats: 0,
      remainingSeats: 0,
      date: ""
    };

  },
  
  methods: {
  goHome() {
    this.$router.push({ path: "/" });
  },
   dataHandler(snapshot) {
      const item = snapshot.val();
      this.myClass.push({ ...item, mykey: snapshot.key });
   },
  goLoginSignup() {
    this.$router.push({ path: "/login" });
  },
  goAClasses() {
        this.$router.push({ path: "/aclasses" });
  },
  goEClasses() {
        this.$router.push({ path: "/eclasses" });
  },
   yourButtonHandler() {
  AppDB.ref("classes")
  .push()
  .set({
    abv: this.abv,
    meetingTime: this.date,
    number: this.number,
    remainingSeats: this.remainingSeats,
    totalSeats: this.totalSeats,
  });    
  },
    

  
  },
    mounted() {
          AppDB.ref("classes").on("child_added", this.dataHandler);

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
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}

</style>
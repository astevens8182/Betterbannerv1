<template>
<div id=awda>
  <div >
 <header>
        <!-- <img src="banner.jpg" alt="Banner photo"> -->
</header>
      <nav>        
          <a class="font-weight-black" @click="goHome">Home</a>
          <a class="font-weight-black" @click="goAClasses">Available Classes</a>
          <a class="font-weight-black" @click="goEClasses">Enrolled Classes</a>
          <a class="font-weight-black" >Delete Account</a>
      </nav>
  </div>
<div>
  <h2>Available Classes</h2>
</div>

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
</style>
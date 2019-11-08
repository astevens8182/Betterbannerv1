<template>
<div>
<<<<<<< HEAD
  <div>
      <nav>        
          <a class="title" @click="goHome">Home</a>
          <a class="title" @click="goAClasses">Available Classes</a>
          <a class="title" @click="goEClasses">Enrolled Classes</a>
          <a class="title" >Delete Account</a>
      </nav>
  </div>
=======

>>>>>>> 964a72d72a78aceb00b8cae1d348bb8a1498c6c5

  <div id="content">
  <h3>Available Classes</h3>
  
  <table>
    <thead>
        <tr>
          <th>Abv</th>
          <th>Number</th>
          <th>Description</th>
          <th>Total Seats</th>
          <th>Remaining Seats</th>
          <th>Time</th>
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

  <div id="enroll">
    <v-btn id ="enroll" class="ma-2 text-left" outlined color="blue">Enroll</v-btn>
  </div>

  </div>
</div>
</template>

<script>
import { AppDB } from "../db-init.js";
import { dataHandler} from "../App.vue";

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
      isLoggedin: false
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
    meetingTime: this.meetingTime,
    description: this.description,
    numbers: this.number,
    remainingSeats: this.remainingSeats,
    totalSeats: this.totalSeats,
  });    
  },
    

  
  },
    mounted() {
          AppDB.ref("classes").on("child_added", this.dataHandler);
          this.isLoggedin = dataHandler.isLoggedIn;
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
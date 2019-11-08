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

  <v-simple-table>
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
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  <v-btn id ="enroll" class="ma-2" outlined color="blue">Enroll</v-btn>

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
      isLoggedin: false,

      desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
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
  margin-top: 20px;
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}

</style>
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

  </div>
</div>
</template>

<script>

export default {
  data: function() {
    return {
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
  goLoginSignup() {
    this.$router.push({ path: "/login" });
  },
  goAClasses() {
        this.$router.push({ path: "/aclasses" });
  },
  goEClasses() {
        this.$router.push({ path: "/eclasses" });
  }
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
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

  <div id="content">
  <h3>Available Classes</h3>
  
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
  
    </tbody>
  </table>

  <div id="enroll">
    <v-btn id ="enroll" class="ma-2 text-left" outlined color="blue">Enroll</v-btn>
  </div>

  </div>
</div>
</template>

<script>

export default {
  data: function() {
    return {
      
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
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}

</style>
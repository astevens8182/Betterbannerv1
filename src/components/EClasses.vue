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
  <h3>Enrolled Classes</h3>
  
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
</style>
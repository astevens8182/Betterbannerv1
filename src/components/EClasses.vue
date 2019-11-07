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
  <h2>Enrolled Classes</h2>
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
  
    </tbody>
  </table>
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
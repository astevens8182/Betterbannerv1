<template>
<div id=awda>
  <div >
 <header>
        <h2>Taylor Rhodes</h2>
        <img src="banner.jpg" alt="Banner photo">
</header>
      <nav>
        <ul>
          <li><a @click="goHome">Home</a></li>
          <li><a @click="goLoginSignup">Login/Sign-up</a></li>
          <li><a @click="goAClasses">Available Classes</a></li>
          <li><a @click="goEClasses">Enrolled Classes</a></li>
          <li><a >Delete Account</a></li>
          <li><a >Logout</a></li>
        </ul>
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
    this.$router.push({ path: "/home" });
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





</style>
<template>
<div id=awda>
  <div >
 <header>
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
  <h2>Welcome!</h2>
</div>
  <p>FILLER TEXT</p>
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





</style>
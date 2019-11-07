<template>
<div id=awda>
  <div >
<header>
        <!-- <img src="banner.jpg" alt="Banner photo"> -->
</header>
      <nav>        
          <a @click="goHome">Home</a>
          <a @click="goLoginSignup">Login/Sign-up</a>
          <a @click="goAClasses">Available Classes</a>
          <a @click="goEClasses">Enrolled Classes</a>
          <a >Delete Account</a>
          <a >Logout</a>
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
nav {
  padding: 5px;
  margin: 5px;
}

nav a {
  padding: 5px;
  margin: 5px;
}
</style>
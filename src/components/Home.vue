<template>
<div id=awda>
  <div>
      <nav>        
          <a @click="goHome">Home</a>
          <a @click="goAClasses">Available Classes</a>
          <a @click="goEClasses">Enrolled Classes</a>
          <a >Delete Account</a>
      </nav>
  </div>
  <div id="content">
    <h2>Welcome!</h2>
  
    <p>FILLER TEXT</p>
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

nav a {
  padding: 5px;
  margin: 5px;
}

#content {
  padding: 5px;
  margin: 5px;
}
</style>
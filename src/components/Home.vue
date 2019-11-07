<template>
<div id=awda>
  <div>
      <nav>        
          <a class="font-weight-black" @click="goHome">Home</a>
          <a class="font-weight-black" @click="goAClasses">Available Classes</a>
          <a class="font-weight-black" @click="goEClasses">Enrolled Classes</a>
          <a class="font-weight-black" >Delete Account</a>
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
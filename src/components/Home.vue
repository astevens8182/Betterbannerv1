<template>
<div>
  <div>
      <nav>        
          <a class="font-weight-black" @click="goHome">Home</a>
          <a class="font-weight-black" @click="goAClasses">Available Classes</a>
          <a class="font-weight-black" @click="goEClasses">Enrolled Classes</a>
          <a class="font-weight-black" >Delete Account</a>
      </nav>
  </div>
  <div id="content">
    <h3>Welcome!</h3>
  
    <p>FILLER TEXT</p>
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
  padding-bottom: 10px;
}

nav a {
  padding: 5px;
  margin: 5px;
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
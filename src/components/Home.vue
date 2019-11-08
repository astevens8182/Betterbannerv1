<template>
<div>

  

  <div id="content">
    <p class="font-weight-black">Welcome!</p>
  
    <p class="font-weight-regular">FILLER TEXT</p>
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

nav a {
  padding: 5px;
  margin: 5px;
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
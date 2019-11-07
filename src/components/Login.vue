<template>
<div>
  <div >
<header>
        <!-- <img src="banner.jpg" alt="Banner photo"> -->
</header>
      <nav>        
          <a @click="goHome">Home</a>
          <a @click="goAClasses">Available Classes</a>
          <a @click="goEClasses">Enrolled Classes</a>
          <a >Delete Account</a>
      </nav>
  </div>
<div id="container">
<v-text-field label="email/username" v-model="userEmail"></v-text-field>
<v-text-field label="password" type="password" v-model="userPassword"></v-text-field>
<v-container v-show="isLoggedIn === false">
  <v-row justify="end">
    <v-btn @click="doSignUp">SignUp</v-btn>
    <v-btn @click="doSignIn">SignIn</v-btn>
  </v-row>
</v-container>
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
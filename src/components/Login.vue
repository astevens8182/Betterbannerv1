<template>
<div>
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


</style>
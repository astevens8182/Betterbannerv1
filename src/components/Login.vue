<template>
<div id="content">
  
  <div id="innerContentL">
    <p>
      If you've already created an account, please sign-in.<br><br>
      If you do not have an account, please sign-up using the following form. Password must be at least 6 characters.
    </p>
  </div>

  <div id="innerContentR">
  <v-text-field label="email/username" v-model="userEmail"></v-text-field>
  <v-text-field label="password" type="password" v-model="userPassword"></v-text-field>
    <v-row justify="end">
      <v-btn class="ma-2" outlined color="blue" @click="doSignup">Sign Up</v-btn>
      <v-btn class="ma-2" outlined color="blue" @click="doSignin">Sign In</v-btn>
    </v-row>
  </div>

</div>
</template>

<script>
import { AppAUTH } from "../db-init.js";

export default {
  data: function() {
    return {    
      userEmail: "",
      userPassword: "",
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
  },
  doSignin(){
  AppAUTH.signInWithEmailAndPassword(this.userEmail, this.userPassword)
  .then((u) => {
    alert("You logged in as " + u.user.email);
    this.$router.push({ path: "/" });

  })
  .catch((err) => {
    alert("Error " + err);
  });
  },
  doSignup(){
    AppAUTH.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
  .then((u) => {
    alert("User created with UID " + u.user.uid);
        this.$router.push({ path: "/" });

  })
  .catch((err) => {
    alert("Error " + err);
  });
  },
  
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

#content {
  /*
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  */
  text-align: left;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}

#innerContentR {
  /*
  grid-row-start: 1;
  grid-column-start: 2;
  */
  max-width: 400px;
  margin: auto;
  padding: 10px;
}

#innerContentL {
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row-start: 1;
  grid-column-start: 1;
  */
  max-width: 800px;
  margin: auto;
}

</style>
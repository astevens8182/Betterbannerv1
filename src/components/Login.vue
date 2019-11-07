<template>
<div>
  
<div id="content">
<v-text-field label="email/username" v-model="userEmail"></v-text-field>
<v-text-field label="password" type="password" v-model="userPassword"></v-text-field>
  <v-row justify="end">
    <v-btn @click="doSignup">SignUp</v-btn>
    <v-btn @click="doSignin">SignIn</v-btn>
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
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
}

</style>
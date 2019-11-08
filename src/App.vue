<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>
          <div id="logo">
            <img src="./assets/banner.jpg">
          </div>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
    <nav>        
          <v-btn text small @click="goHome">Home</v-btn>
          <v-btn text small @click="goAClasses">Available Classes</v-btn>
          <v-btn text small @click="goEClasses" v-show="isLoggedIn === true">Enrolled Classes</v-btn>
          <v-btn text small>Delete Account</v-btn>
          <v-btn class="ma-2" outlined color="blue" @click="goLoginSignup"  v-show="isLoggedIn === false">Sign in/up</v-btn>
          <v-btn class="ma-2" outlined color="blue" @click="doSignout" v-show="isLoggedIn === true">Sign out</v-btn>
      </nav>
    </v-app-bar>

      
    <v-content>
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
import { AppAUTH } from './db-init';

export default {
  name: 'App',
  components: {

  },

  data: () => ({
    //
    isLoggedIn: false
  }),

methods:{
  doSignout(){
    AppAUTH.signOut().then(() => {
      alert("Outta here");
      this.$router.back();
    });
  },
  
  goLoginSignup() {
    this.$router.push({ path: "/login" });
  },
  goHome() {
    this.$router.push({ path: "/" });
  },
  goAClasses() {
        this.$router.push({ path: "/aclasses" });
  },
  goEClasses() {
        this.$router.push({ path: "/eclasses" });
  },
},
mounted() {
AppAUTH.onAuthStateChanged((u) => {
  if (u == null) this.isLoggedIn = false;
  else this.isLoggedIn = true;
});
}
};
</script>
<style>
span {
  padding: 5px;
  margin: 5px;
}
#header {
  max-width: 630px;
}
</style>
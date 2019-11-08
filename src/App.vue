<template>
  <v-app>
    <!--
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>
          <div id="logo">
            <v-img src="./assets/banner.jpg" max-width="200" max-height="59"></v-img>
          </div>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <nav>        
          <v-btn text small @click="goHome">Home</v-btn>
          <v-btn text small @click="goAClasses">Available Classes</v-btn>
          <v-btn text small @click="goEClasses" v-show="isLoggedIn === true">Enrolled Classes</v-btn>
          <v-btn text small @click="goEClasses" v-show="isLoggedIn === true">Delete Account</v-btn>
          <v-btn text large v-show="isLoggedIn === true">{{email}}</v-btn>
          <v-btn class="ma-2" outlined color="blue" @click="goLoginSignup"  v-show="isLoggedIn === false">Sign in/up</v-btn>
          <v-btn class="ma-2" outlined color="blue" @click="doSignout" v-show="isLoggedIn === true">Sign out</v-btn>
    </nav>    
    </v-app-bar>
    -->
    <div>
      <v-app-bar
        color="blue accent-4"
        dark
      >
      <v-toolbar-title>Better Banner</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="text-center">
      <v-chip
        class="ma-2"
        color="black"
        text-color="white"
        v-show="isLoggedIn === true"
      >
      <v-avatar left v-show="isLoggedIn === true">
      <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
      <v-btn class="ma-2" color="black" v-show="isLoggedIn === true">{{email}}</v-btn>
      </v-chip>

      </div>
          <v-btn class="ma-2" outlined color="white" @click="goLoginSignup"  v-show="isLoggedIn === false">Sign in/up</v-btn>
          <v-btn class="ma-2" outlined color="white" @click="doSignout" v-show="isLoggedIn === true">Sign out</v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-content><v-btn text small @click="goHome">Home</v-btn></v-list-item-content>
          <v-list-item-content><v-btn text small @click="goAClasses">Available Classes</v-btn></v-list-item-content>
          <v-list-item-content><v-btn text small @click="goEClasses" v-show="isLoggedIn === true">Enrolled Classes</v-btn></v-list-item-content>
          <v-list-item-content><v-btn text small @click="goEClasses" v-show="isLoggedIn === true">Delete Account</v-btn></v-list-item-content>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>

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
    email: "",
    isLoggedIn: false,
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
      this.email = u.email;

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
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
      <v-btn class="ma-2" outlined color="blue" @click="doSignout" v-show="isLoggedIn === true">Sign out</v-btn>
      <v-btn class="ma-2" outlined color="blue" @click="goLoginSignup" v-show="isLoggedIn === false">Sign in</v-btn>
      <v-btn class="ma-2" outlined color="blue" v-show="isLoggedIn === false">Sign up</v-btn>
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
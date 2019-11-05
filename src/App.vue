<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BetterBanner</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="doSignout" v-show="isLoggedIn === true">Signout</v-btn>

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
},
mounted() {
AppAUTH.onAuthStateChanged((u) => {
  if (u == null) this.isLoggedIn = false;
  else this.isLoggedIn = true;
});
}
};
</script>

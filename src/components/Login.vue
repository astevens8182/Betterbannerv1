<template>
<div>
  <div>
      <nav>        
          <a class="title" @click="goHome">Home</a>
          <a class="title" @click="goAClasses">Available Classes</a>
          <a class="title" @click="goEClasses">Enrolled Classes</a>
          <a class="title" >Delete Account</a>
      </nav>
  </div>
<div id="content">
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
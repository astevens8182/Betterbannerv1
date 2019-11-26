<template>
<div>
  

  <div id="content">
  <p class="font-weight-black">Enrolled Classes</p>
  
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Abv</th>
          <th class="text-center">Number</th>
          <th class="text-center">Description</th>
          <th class="text-center">Total Seats</th>
          <th class="text-center">Remaining Seats</th>
          <th class="text-center">Time</th>
        </tr>
      </thead>
      <tbody>
  <tr v-for="(myClasses,pos) in myClasses" :key="pos">
            <td>{{ myClasses.abv }}</td>
            <td>{{ myClasses.numbers }}</td>
            <td>{{ myClasses.description}}</td>
            <td>{{ myClasses.totalSeats }}</td>
            <td>{{ myClasses.remainingSeats }}</td>
            <td>{{ myClasses.meetingTime }}</td>
            <td><input type="checkbox" v-bind:id="myClasses.mykey" v-on:change="selectionHandler" /></td>
          </tr>
      </tbody>
    </template>
  </v-simple-table>

  <v-btn @click="myRemoveHandler" v-bind:disabled="userSelections.length == 0"  class="ma-2" outlined color="blue">Remove Selection(s)</v-btn>

  </div>
</div>
</template>

<script>
import { AppDB, AppAUTH } from "../db-init.js";

export default {
  data: function() {
    return {
      classList: [],
      holderEnrolled: [],
      myClasses: [],
      enrolledClasses: [],
      abv: "",
      number: 0,
      totalSeats: 0,
      remainingSeats: 0,
      date: "",
      test: [],
      userSelections: []
    };

  },
  methods: {
     dataHandlerClassList(snapshot) {
      const item = snapshot.val();
      this.classList.push({ ...item, mykey: snapshot.key });
    },
    dataHandlerEnrolledClasses(snapshot){
      const item = snapshot.val();
      this.holderEnrolled.push({...item, mykey: snapshot.key});
      this.enrolledClasses = this.holderEnrolled.filter(z => z.userKey === AppAUTH.currentUser.uid);
   },

  myRemoveHandler () {
          alert("Success! Dropped in " + this.test.length + " class(es)!");

        for (let i = 0; i <= this.userSelections.length; i++){
          AppDB.ref("userToClasses").child(this.test[i].mykey).remove();
        
      let temp = this.classList.find(x => x.mykey === this.userSelections[i]);
      temp.remainingSeats += 1;
      let tempKey = temp.mykey;
      AppDB.ref("classes/" +tempKey)
      .set({
        abv: temp.abv,
        description: temp.description,
        meetingTime: temp.meetingTime,
        numbers: temp.numbers,
        remainingSeats : temp.remainingSeats,
        totalSeats: temp.totalSeats
      })
      }      
   
    },
  
    selectionHandler (changeEvent) {
      // var text = changeEvent.target.id;
      // var integer = parseInt(text, 10)
      // integer = integer -1;
      // if(this.myClasses[integer].remainingSeats === 0){
      //   changeEvent.target.checked = false;
      //   alert("Class is full! Wait for someone to drop");
      //   return;
      // }
       this.test = this.enrolledClasses.filter(x => x.userKey === AppAUTH.currentUser.uid && x.classKey === changeEvent.target.id);

      const whichKey = changeEvent.target.id;
      if (changeEvent.target.checked) {
      // add the selected key to the array
        this.userSelections.push(whichKey);
      } else {
      // remove the deselected key from the array
          this.userSelections = this.userSelections.filter(a => {a.whichKey == whichKey});        
      }
    }, 
  },
    mounted() {
          AppDB.ref("classes").on("child_added", this.dataHandlerClassList);
          AppDB.ref("userToClasses").on("child_added", this.dataHandlerEnrolledClasses);
          for(let i = 0; i <= this.enrolledClasses.length; i++){
            let temp = this.classList.find(s => s.mykey === this.enrolledClasses[i].classKey);
            this.myClasses.push(temp);
          }


          
  },

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

table {
  padding: 5px;
  margin: auto;
  text-align: center;
  background: darkblue;
}

th {
  padding: 5px;
  margin: 5px;
  text-align: center;
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
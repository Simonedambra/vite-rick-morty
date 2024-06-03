<!-- <script></script> -->
<script>
import appHeader from './components/AppHeader.vue';
import appMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';
export default{
  data(){
return{
  store,
}


  },
 
  created(){
        axios.get(this.store.apiUrl).then(response =>{
this.store.results=(response.data)
console.log(this.store.results.results)
        })},
  components:{
appHeader,
appMain

  },
  }


</script>
<template>
  <appHeader/>
  <appMain/>
  
</template>
<!-- <style></style> -->

<script>

import { store } from '../store';
export default {
    name:'appmain',
    data(){
        return{store,

        }
    },
   
    }

</script>
<template>

<div class="container">
    <div class="cards" v-for="index in this.store.results.results"><img :src="index.image" alt="">
        <h2>{{ index.name }}</h2>
        <h3>{{ index.status }}</h3>
        <h4>{{ index.species }}</h4>
    </div>
   


</div>
</template>
<style scoped>
.container{
    height: 100%;
} 
</style>
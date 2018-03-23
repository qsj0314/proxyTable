<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import ax from '../config/axios'
  export default {
    name: 'App',
    data(){
      return{}
    },
    mounted(){
      this.get();
      console.log();
    },
    methods: {
      get: ()=>{
        // console.log('++++++++++++');
        // this.$http.get(BASE_URL, function(data) {
        //   console.log(data);
        // });
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

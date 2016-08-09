<template>
  <div id="app">
    <input type="text" v-model="newItem" v-on:keyup.enter="addNew">
    <h1 v-text="title"></h1>
    <ul>
      <li v-for="item in items" v-bind:class="{ finished: item.isFinished }" v-on:click="toggle(item)">
          {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from './store.js'
console.log(Store)
export default {
  data: function(){
    return{
      title:"test",
      items:Store.getDate(),
      newItem:"",
    }
  },

  methods:{
    toggle(item){
      item.isFinished = !item.isFinished;
    },
    addNew(){
      this.items.push({
        label:this.newItem,
        isFinished: false
      })
    },
  },

  watch:{
    items:{
      handler: function(items){
        Store.setDate(items);
      }
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
}
.finished {
  font-size:24px;
}
</style>

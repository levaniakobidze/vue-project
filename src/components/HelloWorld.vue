<script >
export default {

data () {
  return {
  counter:0,
}
},
methods: {
  turnToString () {
    this.counter = typeof this.counter === 'string' ? 0 : 'Levan';
  },
  increase() {
    if(typeof this.counter !== 'string'){
        this.counter ++
      }
  },
  decrease() {
      if(typeof this.counter !== 'string'){
        this.counter --
      }
  }
 },
 mounted () {
  alert('this is mount' + this.counter)
 },
//  beforeCreate(){
//   alert('this is before create' + this.counter)
//  }

}


</script>

<template>
  <h1 @click="turnToString" class="text-black-900 px-10 py-3 bg-slate-500 rounded-lg cursor-pointer">click me</h1>
  <button @click="decrease">-</button>
  <span>{{counter}}</span>
  <button @click="increase">+</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

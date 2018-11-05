
Vue.component('app-wrapper', {
 template: `
   
       <header>
            <p class="text_header">JE VOTE !</p>
            <img class="icon" src="./analyse/menu_close.svg" @click="toggleNav()">
       </header>
   
 `,
 methods: {
   toggleNav () {
     this.$parent.$emit('toggleNav')
   }
 }
})

Vue.component('app-nav', {
 data () {
   return {
       active: false,
       
   }

 },
 
 template: `
   <aside :class="{ active: active}">
     <nav>
         <img class="top_icon"  src="./analyse/menu_open.svg" @click="toggleNav()" >
         <p class="question"> Votre question:</p>
         <input type="text" class="input">
     </nav>
   </aside>
 `,
 methods: {
   toggleNav () {
     this.$parent.$emit('toggleNav')
   }
 },
 mounted () {
   this.$parent.$on('toggleNav', () => {
     // console.log('received')
     this.active = !this.active
   })
 }
})

let counter = {
  data: function (){
    return {
      count: 0
    }
  },
  props:{
    start: {type:Number, default: 0}
  },
  computed:{
    total: function(){
      return this.start + this.count
    }
  },
  methods: {
    increment: function(){
      this.count++
    }
  },
  template: `<button @click="increment">{{ total }}</button>`
}

var App = new Vue({
 el: '#app',
 
})


// var json = [
//     {
//         "first-name" : "Corentin",
//         "last-name" : "Berlana",
//         "contact" : "corentinmistere@gmail.com"
//     },
//     {
//         "first-name" : "Grégory",
//         "last-name" : "Bouloc",
//         "contact" : "gregory.bouloc@gmail.com"
//     },
//     {
//         "first-name" : "Joris",
//         "last-name" : "Bringer",
//         "contact" : "bringer.jo@gmail.com"
//     },
//     {
//         "first-name" : "Céline",
//         "last-name" : "Calmels",
//         "contact" : "celine.calmels@gmail.com"
//     },
//     {
//         "first-name" : "Antoine",
//         "last-name" : "Caron",
//         "contact" : "antoinecaron.simplon@gmail.com"
//     },
//     {
//         "first-name" : "Vanessa",
//         "last-name" : "Chaillou Delouvrier",
//         "contact" : "vanessa.chaillou@orange.fr"
//     },
//     {
//         "first-name" : "David",
//         "last-name" : "Da Silva",
//         "contact" : "daviddasilvestre@gmail.com"
//     },
//     {
//         "first-name" : "Ruud",
//         "last-name" : "De Korte",
//         "contact" : "dekorte.tsrit@gmail.com"
//     },
//     {
//         "first-name" : "Florian",
//         "last-name" : "Javanet",
//         "contact" : "ludwig.somo@gmail.com"
//     },
//     {
//         "first-name" : "Ilham",
//         "last-name" : "Parfait",
//         "contact" : "hima14000@gmail.com"
//     },
//     {
//         "first-name" : "Ana",
//         "last-name" : "Jimenez",
//         "contact" : "aj050630@gmail.com"
//     },
//     {
//         "first-name" : "Fréderic",
//         "last-name" : "Salm",
//         "contact" : "salmsimplon@gmail.com"
//     },
//     {
//         "first-name" : "Christelle",
//         "last-name" : "Talbot",
//         "contact" : "christelle.talbot12@gmail.com"
//     },
//     {
//         "first-name" : "Mathéo",
//         "last-name" : "Zeller",
//         "contact" : "matheo.zeller@gmail.com"
//     }
// ];

// console.log('json');
  

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


var App = new Vue({
 el: '#app',
 
})

import { defineStore,createPinia } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    ParoImpar(state){
      if(0==state.counter%2)return "par"
      return "impar"               
 }
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
const pinia=createPinia();
pinia.use((context)=>{
  console.log(context);
  
  const initialState = JSON.parse(localStorage.getItem('pinia')) || {}
  if(initialState){
    context.store.$patch(initialState);
  }

  context.store.$subscribe((Mutation,state)=>{
    console.log("Entro en el mutacion")
    window.localStorage.setItem('counter',JSON.stringify(state))
  })
  

})


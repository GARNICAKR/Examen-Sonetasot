import { defineStore,createPinia} from 'pinia';
export const useMessagesStore = defineStore('Messages',{
  state: () => ({
    unSeeMessages: 0,
    sendMessages:[],
    Orden:0,
    Escribiendo1:false,
    Escribiendo2:false,
  }),
  getters: {
  },
  actions: {
    addMessage(text,id) {
        console.log(text);
        this.sendMessages.push({orden:this.Orden++,text,id});
        this.unSeeMessages++;
         },
      SeeMessages(){
          this.unSeeMessages=0;
      },
      Writing1(bool){
        this.Escribiendo1=bool;
      },
      Writing2(bool){
        this.Escribiendo2=bool;
      }
      
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },

});

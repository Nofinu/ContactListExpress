import { contact } from "./contact.js"


export class Annuaire {
  constructor(){
    this.contactList = []
  }

  AddContact(json){
    const {nom,prenom,phone,email}=json
    const id = Math.random().toString(16).slice(2)
    this.contactList.push(new contact(id,nom,prenom,phone,email))
  }

  findContact(id){
    return this.contactList.find(contact => contact.id === id)
  }

  findIndex(id){
    return this.contactList.findIndex(contact=> contact.id === id)
  }

  editContact(index,id,json){
    const {nom,prenom,phone,email}=json
    this.contactList[index]= {id,nom,prenom,phone,email}
  }

  deleteContact(index){
    this.contactList.splice(index,1)
  }
}
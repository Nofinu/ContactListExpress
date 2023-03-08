import express from 'express';
import { Annuaire } from './classes/Annuaire.js';

const annuaire = new Annuaire()

const app = express()

app.use(express.json())

app.post('/add',(req,res)=>{
  const {nom,prenom,phone,email}=req.body
  annuaire.AddContact(nom,prenom,phone,email)
  res.json(annuaire.contactList[annuaire.contactList.length-1])
})

app.get('/contactsliste',(req,res)=>{
  res.json(annuaire.contactList)
})

app.get('/contactsliste/:id',(req,res)=>{
  const contactFound = annuaire.findContact(req.params.id)
  if(contactFound){
    res.json(contactFound)
  }
  else{
    res.end("aucun contact trouver a l'id "+ req.params.id)
  }
})

app.put('/editcontact/:id',(req,res)=>{
  const indexFound = annuaire.findIndex(req.params.id)
  console.log(indexFound)
  if(indexFound !== -1){
    annuaire.editContact(indexFound,req.params.id,req.body)
    res.json({id:req.params.id,...req.body})
  }
  else{
    res.end("aucun contact trouver a l'id "+ req.params.id)
  }
})

app.delete('/delete/:id',(req,res)=>{
  const indexFound = annuaire.findIndex(req.params.id)
  if(indexFound !== -1){
    annuaire.deleteContact(indexFound)
    res.end("contact "+req.params.id+" suprimer")
  }
  else{
    res.end("aucun contact trouver a l'id "+ req.params.id)
  }
})

app.listen(3001,function(){
  console.log('app.js ecoute sur le port 3001')
})

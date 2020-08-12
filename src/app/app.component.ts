import { Component, OnInit } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diktatorerne';
  myForm: FormGroup;
  dictator:Dictator;
  dict: Array <Dictator> = Array();
  

  
 constructor(private fb: FormBuilder){}
  
 ngOnInit(){
  this.myForm = this.fb.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    death: new FormControl(''),
    birth: new FormControl(''),
    description: new FormControl('')
   })
 }

 
  saveToList(form: FormGroup){
    this.dictator = new Dictator;
    this.dictator.firstName = form['firstName'];
    this.dictator.lastName = form['lastName'];
    this.dictator.death = form['death'];
    this.dictator.birth = form['birth'];
    this.dictator.description = form['description'];

    this.dict.push(this.dictator);

    
  }
}


 /*if(this.list[0] == null) {
      this.list[0] = new Dictator(this.firstName2, this.lastName2, this.birth2, this.death2, this.description2);
      console.log(this.list[0].firstName);
    }
    for (let i = 0; i < this.list.length; i++) {
      this.list[i] = new Dictator(this.firstName2, this.lastName2, this.birth2, this.death2, this.description2);
      console.log(this.list[i].firstName)
      /*if(this.list[0].firstName != this.firstName) {
        this.list[i] = new Dictator(this.firstName, this.lastName, this.birth, this.death, this.description);
        alert(this.list[0].firstName);
      } else{
        alert("dictator already exists")
      }*/

class Dictator{
  firstName: string;
  lastName: string;
  birth: Date;
  death: Date;
  description: string;
  constructor(){}
}
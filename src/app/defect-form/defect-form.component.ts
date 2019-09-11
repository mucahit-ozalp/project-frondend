import { Component, OnInit } from '@angular/core';
import {Defect} from '../defect';
import {Departmant} from '../departmant'



@Component({
  selector: 'app-defect-form',
  templateUrl: './defect-form.component.html',
  styleUrls: ['./defect-form.component.css']
})
export class DefectFormComponent implements OnInit {
  departmant:Departmant[]=[
    {d_id:'1', component:'Kenan',departmant:'Tester'},
    {d_id:'2', component:'Kenan',departmant:'Developer'},
    {d_id:'3', component:'Kenan',departmant:'Operation'},
    {d_id:'4', component:'Sybil',departmant:'Tester'},
    {d_id:'5', component:'Sybil',departmant:'Developer'},
    {d_id:'6', component:'Sybil',departmant:'Operation'},
    {d_id:'7', component:'Tibco',departmant:'Tester'},
    {d_id:'8', component:'Tibco',departmant:'Developer'},
    {d_id:'9', component:'Tibco',departmant:'Operation'}
  
  ];
  


  constructor() { }

  ngOnInit() {
    console.log(this.departmant);
    
    


    
  }
  
  
  

}

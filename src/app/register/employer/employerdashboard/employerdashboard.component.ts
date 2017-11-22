import { Component, OnInit } from '@angular/core';
import { navpills,employerDashboardNavpills } from './../../../models/home';
@Component({
  selector: 'app-employerdashboard',
  templateUrl: './employerdashboard.component.html',
  styleUrls: ['./employerdashboard.component.scss']
})
export class EmployerdashboardComponent implements OnInit {
  navpills: Array<object>;
  selectedItem: String;
  pageName: string;
  employerDashboardNavpills: Array<object>;


  constructor() { 
    this.selectedItem = 'APPLICATIONS';
    this.pageName='APPLICATIONS';
    this.employerDashboardNavpills = employerDashboardNavpills;

  }
  listClick(event, newValue) {
    
        console.log(newValue.name);
        this.selectedItem = newValue.name;
        this.pageName = newValue.name;
      
    
      }

  ngOnInit() {
  }

}

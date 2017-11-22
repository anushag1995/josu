import { Component, OnInit } from '@angular/core';
import { images} from './../../models/home';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss']
})
export class DashboardheaderComponent implements OnInit {
  images: Array<any>;
  constructor() {
    this.images = images;
   }

  ngOnInit() {
  }

}

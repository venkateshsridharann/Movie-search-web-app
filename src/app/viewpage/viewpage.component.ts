import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css'],
})
export class ViewpageComponent implements OnInit {

  constructor(public dataService: DataserviceService) { }

  ngOnInit() {
  }

}

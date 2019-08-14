import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Searcher';

  constructor(public dataService: DataserviceService, private router: Router) { }

  ngOnInit() {
    this.dataService.randompage()
    this.dataService.getlatest()
    this.router.navigate([''])
  }
}
import { Component } from '@angular/core';
import { MainService } from '../configuration/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data: any;

  constructor(private apiService: MainService) {}

  ngOnInit(): void {
    this.apiService.getData('end').subscribe(response => {
      this.data = response;
      console.log(this.data);
      
    });

    this.apiService.postData('end', {a:'abc'}).subscribe(response => {
      this.data = response;
      console.log(this.data);
      
    });
  }
}

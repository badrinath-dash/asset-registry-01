import { Component } from '@angular/core';

export class User {
  public name: string;
  public description: string;
  public email: string;
  public password: string;
  public index_type: string;
  public app_name: string;
  public role_name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Dashboard'; 
  model = new User();

  
  index_types = ['Event', 'Metrics','Summary', 'Summary Metrics'];

  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  constructor() {}

  onSubmit(form) {
    console.log(form.value);
  }
  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export class SplunkAsset {
  public name: string;
  public description: string;
  public email: string;
  public password: string;
  public index_type: string;
  public app_name: string;
  public role_name: string;
  public index_created_by_list: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  title = 'Dashboard'; 
  model = new SplunkAsset();
  
  userForm = new FormGroup({
    'name': new FormControl('' , [ Validators.required]),
    'alterEgo': new FormControl(),
    'power': new FormControl()
  });

  
  index_types = [
    'Event', 
    'Metrics',
    'Summary', 
    'Summary Metrics'
  ];

  index_created_by_list: string[] = [
    'Badri Dash',
    'Bismaya Pattanaik',
    'Jay Regunathan',
    'Sunith'
  ];

  constructor() {}

  onSubmit() {
    console.log(this.userForm);
  }
 

}



import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  title = 'Dashboard'; 
 
  public name: string;
  public description: string;
  public app_name: string;
  public splunk_role_name: string;
  public ags_entitlement: string;
  public index_created_date: date;
  
  index_types: string[] = [
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
        app_name: ['', Validators.required],
        splunk_role_name: ['', Validators.required],
        ags_entitlement: ['', Validators.required],
        index_created_date: ['', Validators.required],
      }       
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}



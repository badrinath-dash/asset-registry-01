import { Component } from '@angular/core';

export class SplunkAsset {
  public name: string;
  public description: string;
  public email: string;
  public password: string;
  public index_type: string;
  public app_name: string;
  public role_name: string;
  public index_created_by_list: string;
  public splunk_role_name: string;
  public ags_entitlement: string;
  public index_created_date: string;
  public index_created_by: string;
  public index_daily_size: string;
  public ability_app_name: string;
  public itam_support_group: string;
  public data_owner: string;
  public support_group_email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'home';
  model = new SplunkAsset();

  index_types = ['Event', 'Metrics', 'Summary', 'Summary Metrics'];

  index_created_by_list: string[] = [
    'Badri Dash',
    'Bismaya Pattanaik',
    'Jay Regunathan',
    'Sunith',
  ];

  constructor() {}

  onSubmit(form) {
    console.log(form.value);
  }
}

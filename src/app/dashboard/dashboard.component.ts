import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HeroesService } from './dashboard.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { splunkjs } from '../../node_modules/splunk-sdk/splunk.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroesService]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  editHero: Hero ; // the hero currently being edited

  
  
 
 
  
  create_form: FormGroup;
  submitted = false;
  title = 'Dashboard';

  public name: string;
  public description: string;
  public app_name: string;
  public splunk_role_name: string;
  public ags_entitlement: string;
  public index_created_date: string;
  public indextype: string;

  index_types: string[] = ['Event', 'Metrics', 'Summary', 'Summary Metrics'];

  index_created_by_list: string[] = [
    'Badri Dash',
    'Bismaya Pattanaik',
    'Jay Regunathan',
    'Sunith',
  ];


  //constructor(private formBuilder: FormBuilder, heroesService: HeroesService) {}

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.create_form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      app_name: ['', Validators.required],
      indextype: ['', Validators.required],
      splunk_role_name: ['', Validators.required],
      ags_entitlement: ['', Validators.required],
      index_created_date: ['', Validators.required],
    });
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.create_form.controls;
  }
  

  

  onSubmit(): void {
    this.submitted = true;

    if (this.create_form.invalid) {
      return;
    }
    
    

    this.httpClient.post<any>('http://127.0.0.1:8000/en-GB/app/asset-registry/asset_registry_home/splunkd/__raw/servicesNS/nobody/asset-registry/storage/collections/data/asset_registy_collection?output_mode=json', this.create_form.value,).subscribe(data => {
        console.log(data.response);
    });

    
    

    console.log(JSON.stringify(this.create_form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.create_form.reset();
  }
}
  function createData(data: any) {
    throw new Error('Function not implemented.');
  }


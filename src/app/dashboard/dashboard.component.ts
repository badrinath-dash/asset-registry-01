import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './dashboard.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroesService]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  editHero: Hero ; // the hero currently being edited

  constructor(private heroesService: HeroesService) { }
  
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    this.editHero = undefined;
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new hero
    const newHero: Hero = { name } as Hero;
    this.heroesService.addHero(newHero)
      .subscribe(hero => this.heroes.push(hero));
  }
  
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

  constructor(private formBuilder: FormBuilder) {}

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

    console.log(JSON.stringify(this.create_form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.create_form.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { SidebarService } from './navigation/service/sidebar.service';
import { mainContentAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    mainContentAnimation(),
  ]
})
export class AppComponent implements OnInit {
  sidebarState: string;

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    this.sidebarService.sidebarStateObservable$
      .subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }
}
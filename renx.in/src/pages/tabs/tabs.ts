import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { FetchPage } from '../fetch/fetch';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  share: any = HomePage;
  fetch: any = FetchPage;
  about: any = AboutPage;

  constructor() {

  }
}

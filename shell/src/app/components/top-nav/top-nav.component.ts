import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from 'src/app/interface/menu';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  isOpenMenu: boolean = false;
  menuList: menu[] = [
    {
      title: 'Overview',
      link: '',
    },
    {
      title: 'Account',
      link: 'mfe1/a',
      child: [
        { title: 'Balances', link: 'poll' },
        { title: 'Holdings', link: '' },
        { title: 'Activity', link: '' },
        { title: 'Linked Accounts', link: '' }
      ]
    },
    {
      title: 'Transfer Money',
      link: 'mfe1/a',
      child: []
    },
    {
      title: 'Goals',
      link: 'mfe2/a',
      child: []
    },
    {
      title: 'Documents',
      link: 'mfe2/a',
      child: [
        { title: 'Statements', link: '' },
        { title: 'My Files', link: '' },
        { title: 'Trade Confirmations', link: '' },
        { title: 'Tax Forms', link: '' },
        { title: 'Notices', link: '' }
      ]
    },
    {
      title: 'Market Insights',
      link: 'poll',
      child: [
        { title: 'Research', link: '' },
        { title: 'Stock Research', link: '' },
        { title: 'Options Research', link: '' }
      ]
    }
  ];

  private wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.initializeMenu();
      this.isOpenMenu = false;
    }
    this.wasInside = false;
  }

  constructor(
    private router: Router,
  ) {
  }


  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  toggleSubmenu(menu) {
    if (menu?.child?.length > 0) {
      if (!menu.showMenu)
        this.initializeMenu();
      menu.showMenu = !menu.showMenu;
    } else {
      this.openLink(menu.link);
    }
  }

  openLink(link) {
    this.toggleMenu();
    this.initializeMenu();
    this.router.navigate([link]);
  }

  initializeMenu() {
    for (let list of this.menuList) {
      list.showMenu = false;
    }
  }


}

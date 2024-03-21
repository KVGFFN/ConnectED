import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sidebarVisible = false;

  items: MenuItem[] = [];

  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.items = this.buildBreadcrumbs((event as NavigationEnd).url)
    })
  }

  buildBreadcrumbs(url: string): MenuItem[] {
    const breadcrumbs: MenuItem[] = [];
    const urlFragments = url.split('/');
    urlFragments.forEach((fragment, index) => {
      const label = fragment.charAt(0).toUpperCase() + fragment.slice(1);
      const routerLink = index === 0 ? '/' : `/${urlFragments.slice(0, index + 1).join('/')}`;
      breadcrumbs.push({ label, routerLink });
    });
    return breadcrumbs;
  }
}

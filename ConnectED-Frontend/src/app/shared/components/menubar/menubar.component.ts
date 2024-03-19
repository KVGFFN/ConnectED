import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule }  from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faBell, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, TabViewModule, PanelModule, ButtonModule, FontAwesomeModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  // ICONS
  faCoffee = faCoffee;
  faBell = faBell;
  faComments = faComments;
}

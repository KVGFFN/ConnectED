import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MenubarComponent } from './shared/components/menubar/menubar.component';

import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbBarComponent } from './shared/components/breadcrumb-bar/breadcrumb-bar.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    SidebarComponent,
    MenubarComponent,
    TabViewModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelModule,
    FontAwesomeModule,
    BreadcrumbBarComponent,
    CardModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

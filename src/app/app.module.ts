import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { MenuThreeComponent } from './menu-three/menu-three.component';
import { MenuFourComponent } from './menu-four/menu-four.component';
import { MenuFiveComponent } from './menu-five/menu-five.component';
import { MenuSixComponent } from './menu-six/menu-six.component';
import { MenuSevenComponent } from './menu-seven/menu-seven.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationComponent,
    MenuOneComponent,
    MenuTwoComponent,
    MenuThreeComponent,
    MenuFourComponent,
    MenuFiveComponent,
    MenuSixComponent,
    MenuSevenComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

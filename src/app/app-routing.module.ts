import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { MenuThreeComponent } from './menu-three/menu-three.component';
import { MenuFourComponent } from './menu-four/menu-four.component';
import { MenuFiveComponent } from './menu-five/menu-five.component';
import { MenuSixComponent } from './menu-six/menu-six.component';
import { MenuSevenComponent } from './menu-seven/menu-seven.component';

const routes: Routes = [
  { path: "menu_one", component: MenuOneComponent},
  { path: "menu_two", component: MenuTwoComponent},
  { path: "menu_three", component: MenuThreeComponent},
  { path: "menu_four", component: MenuFourComponent},
  { path: "menu_five", component: MenuFiveComponent},
  { path: "menu_six", component: MenuSixComponent},
  { path: "menu_seven", component: MenuSevenComponent},
  { path: "", redirectTo: "menu_one", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

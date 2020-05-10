import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioBoxesComponent } from './portfolio-boxes/portfolio-boxes.component';
import { FieldBoxesService } from './service/fieldBoxes.service';
import { PortfolioBoxComponent } from './portfolio-box/portfolio-box.component';
import { BoxDetailsComponent } from './box-details/box-details.component';

const appRoutes: Routes=[
  {path:'',component: PortfolioBoxesComponent},
  {path:'portfolioboxes',component: PortfolioBoxesComponent},
  {path:'portfolioboxes/:index',component: BoxDetailsComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HeaderComponent,PortfolioBoxesComponent ,PortfolioBoxComponent,BoxDetailsComponent],
  bootstrap:    [ AppComponent ],
  providers:[FieldBoxesService]
})
export class AppModule { }

import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'header.component.html',
  styleUrls:['header.component.css']
})

export class HeaderComponent{
  menuPosition="";
  onToggleMenu(){
    console.log('hello');
    this.menuPosition= 'translateX(0%)';
  }
  onHideMenu(){
    this.menuPosition="translateX(100%)";
  }
  
}
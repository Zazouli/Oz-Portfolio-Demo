import {Component, OnInit,OnDestroy,Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-box',
  templateUrl: 'portfolio-box.component.html',
  styleUrls: ['portfolio-box.component.css']
})

export class PortfolioBoxComponent implements OnInit,OnDestroy{

  @Input() boxContent: any;
  @Input() index: number;
  textColor:string="";
  constructor(private router: Router){}
  ngOnInit(){
    
  }
  showText(){
   this.textColor='rgba(95, 232, 214,1)';
    console.log("hello");
  }
  hideText(){
    this.textColor='rgba(95, 232, 214,0)';
    console.log("hello");
  }
  ngOnDestroy(){
   
  }
  onAccessBox(){
    this.router.navigate([`portfolioboxes/${this.index}`]);
  }
}
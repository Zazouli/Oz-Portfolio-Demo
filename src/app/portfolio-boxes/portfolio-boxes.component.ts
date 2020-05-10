import {Component, OnInit,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {FieldBoxesService} from '../service/fieldBoxes.service';

@Component({
  selector: 'app-portfolio-boxes',
  templateUrl: 'portfolio-boxes.component.html',
  styleUrls: ['portfolio-boxes.component.css']
})

export class PortfolioBoxesComponent implements OnInit,OnDestroy{

  boxesSubscription: Subscription;
  boxesContent: any[];
  constructor(private fieldBoxesService: FieldBoxesService){}
  ngOnInit(){
    this.boxesSubscription= this.fieldBoxesService.boxesSubject.subscribe(
      (boxesContent)=>{
        this.boxesContent= boxesContent;
         console.log(this.boxesContent);
      }
    )
    this.fieldBoxesService.emitBoxesContent();
  }
  ngOnDestroy(){
    this.boxesSubscription.unsubscribe();
  }
}
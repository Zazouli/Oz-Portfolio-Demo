import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FieldBoxesService} from '../service/fieldBoxes.service';

@Component({
  selector: 'app-box-details',
  templateUrl: 'box-details.component.html',
  styleUrls:['box-details.component.css']
})

export class BoxDetailsComponent implements OnInit{
  fieldBox: any;
  constructor(private activatedRoute: ActivatedRoute,private fieldBoxesService: FieldBoxesService){}

  ngOnInit(){
    const index = +this.activatedRoute.snapshot.params['index'];
    this.fieldBox=this.fieldBoxesService.getBoxByIndex(index);
    console.log(this.fieldBox);
  }

}
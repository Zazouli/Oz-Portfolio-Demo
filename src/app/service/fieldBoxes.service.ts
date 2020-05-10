import { Subject } from 'rxjs';

export class FieldBoxesService{
  private boxesContent= [
    {
      'bgImg': 'http://hd.wallpaperswide.com/thumbs/coding_background-t2.jpg',
      'logo': 'fa fa-laptop-house',
      'expBrief':'this is a text about my experience passed in               i don\'t know where.'
    },
    {
      'bgImg': 'http://hd.wallpaperswide.com/thumbs/coding_background-t2.jpg',
      'logo': 'fa fa-laptop-house',
      'expBrief':'this is a text about my experience passed in               i don\'t know where.'
    },
    {
      'bgImg': 'http://hd.wallpaperswide.com/thumbs/coding_background-t2.jpg',
      'logo': 'fa fa-laptop-house',
      'expBrief':'this is a text about my experience passed in               i don\'t know where.'
    },
    {
      'bgImg': 'http://hd.wallpaperswide.com/thumbs/coding_background-t2.jpg',
      'logo': 'fa fa-laptop-house',
      'expBrief':'this is a text about my experience passed in               i don\'t know where.'
    },
    {
      'bgImg': 'http://hd.wallpaperswide.com/thumbs/coding_background-t2.jpg',
      'logo': 'fa fa-laptop-house',
      'expBrief':'this is a text about my experience passed in               i don\'t know where.'
    },
    {
      'bgImg': 'http://hd.wallpaperswide.com/thumbs/coding_background-t2.jpg',
      'logo': 'fa fa-laptop-house',
      'expBrief':'this is a text about my experience passed in               i don\'t know where.'
    }
  ];
  boxesSubject= new Subject<any[]>();

  emitBoxesContent(){
    this.boxesSubject.next(this.boxesContent.slice());
  }
  getBoxByIndex(index: number){
    return this.boxesContent[index];
  }
}
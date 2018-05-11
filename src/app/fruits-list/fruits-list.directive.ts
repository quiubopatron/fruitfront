
import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector:'[defColOnEvent]'
})

export class changeColor{
  constructor(private elRef: ElementRef){
  }

  @HostListener('mouseover') onMouseOver(){
    this.changeText('red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeText('black');
  }

  private changeText(color: string){
    this.elRef.nativeElement.style.color = color;
  }
}

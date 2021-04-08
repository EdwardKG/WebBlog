import {Directive, ElementRef} from '@angular/core';
 
@Directive({
    selector: '[fontStyle]'
})
export class FontDirective{
     
    constructor(private elementRef: ElementRef){
         
        this.elementRef.nativeElement.style.fontFamily = "Segoe Print";
		  this.elementRef.nativeElement.style.fontSize = "20px";
    }
}
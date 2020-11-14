import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './door-position.css']
})
export class AppComponent {
  title = 'Adventskalender';

  readonly SIZE_X = 1252;
  readonly SIZE_Y = 1198;

  private scale: number = 0;
  private offsetX: number = 0;
  private offsetY: number = 0;

  constructor() { }

  ngOnInit() {
    let self = this;
    setTimeout(function () {
      self.calcScale();
    }, 500);
  }

  public calcScale() {
    var scaleX = window.innerWidth / this.SIZE_X;
    var scaleY = window.innerHeight / this.SIZE_Y;

    if (scaleX < scaleY) {
      this.scale = scaleX;
      this.offsetY = window.innerHeight /2 - (this.SIZE_Y / 2 * this.scale);
      this.offsetX = 0;
    } else {
      this.scale = scaleY;
      this.offsetX = window.innerWidth /2 - (this.SIZE_X / 2 * this.scale);
      this.offsetY = 0;
    }

    console.log('Scale: ' + this.scale + ' X: ' + this.offsetX + 'Y: '+this.offsetY);
  }

  public getTransform(): string {
    let result : string = this.getScale() ;
    //+' ' + this.getTranslate();
    //console.log(result);
    return result;
  }

  private getScale(): string {
    return 'scale(' + this.scale + ')';
  }

  private getTranslate():string {
    return 'translate( ' + this.offsetX+ 'px, ' + this.offsetY + 'px)';
  }

  public getOffsetX():string {
    return this.offsetX +'px';
  }

  public getOffsetY():string {
    return this.offsetY +'px';
  }
}

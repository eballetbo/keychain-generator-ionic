import { Component, OnInit } from '@angular/core';
import { GenerateSvgService } from './../generate-svg.service';

@Component({
  selector: 'app-configuration1',
  templateUrl: './configuration1.page.html',
  styleUrls: ['./configuration1.page.scss'],
})
export class Configuration1Page implements OnInit {

  constructor(
    public generateSvgService: GenerateSvgService,
  ) { }

  ngOnInit() {
  }

  changeDivSize(identifier: string){
    const divElement = document.getElementById(identifier);
    if(divElement){
      divElement.style.transform = 'scale(1.2)';
      setTimeout(() => {
        divElement.style.transform = 'scale(1)';
      }, 1200)
    };
    this.generateSvgService.renderCurrent();
  }
}

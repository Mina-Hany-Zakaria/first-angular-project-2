import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { PortfolioListComponent } from '../../components/portfolio-list/portfolio-list.component';
import { ModelWindowComponent } from '../../components/model-window/model-window.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TitleComponent, PortfolioListComponent, ModelWindowComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imagesPaths: string[] = [
    '/assets/images/poert1.png',
    '/assets/images/port2.png',
    '/assets/images/port3.png',
    '/assets/images/poert1.png',
    '/assets/images/port2.png',
    '/assets/images/port3.png',
  ];

  showModel: boolean = false;

  imageSrc!: string;
  show(mainImage: string) {
    this.showModel = true;
    this.imageSrc = mainImage;
  }

  hide() {
    this.showModel = false;
  }
}

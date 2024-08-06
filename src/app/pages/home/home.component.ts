import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imgUrl: string = 'assets/images/avataaars.svg';
}

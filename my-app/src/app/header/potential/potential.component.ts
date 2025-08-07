import { Component } from '@angular/core';
import { HeaderComponent } from "../header.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-potential',
  imports: [HeaderComponent, FooterComponent,RouterLink],
  templateUrl: './potential.component.html',
  styleUrl: './potential.component.scss'
})
export class PotentialComponent {

}

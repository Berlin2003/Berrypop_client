import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-identity',
  imports: [HeaderComponent, FooterComponent,RouterLink],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {
  

}

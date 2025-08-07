import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../loader.service';




@Component({
  selector: 'app-loader',
  imports: [CommonModule,FormsModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  loading$;
  constructor(private loaderService: LoaderService) {
    // Initialize loading$ here after loaderService is injected
    this.loading$ = this.loaderService.loading$;
  }

}

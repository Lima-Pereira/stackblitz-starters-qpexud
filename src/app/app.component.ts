import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sobreVisivel: boolean = false;

  mostrarSobre() {
    this.sobreVisivel = !this.sobreVisivel;
  }
}

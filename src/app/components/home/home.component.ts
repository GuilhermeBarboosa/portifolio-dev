import { Component, Inject, Pipe, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardLanguageComponent } from '../../shared/card-language/card-language.component';
import Typewriter from 't-writer.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardLanguageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verifica se o código está sendo executado no navegador
    if (isPlatformBrowser(this.platformId)) {
      const target = document.querySelector('.tw');

      const writer = new Typewriter(target, {
        loop: true,
        typeColor: 'blue',
      });

      writer.type('Guilherme Barbosa').rest(500).start();
    }
  }
}

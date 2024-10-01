import { Component, Pipe } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardLanguageComponent } from '../../shared/card-language/card-language.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardLanguageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // fullText: string = 'Guilherme Barbosa'; // Texto completo
  // displayedText: string = ''; // Texto que será exibido
  // isDeleting: boolean = false; // Se está apagando ou escrevendo
  // currentIndex: number = 0; // Índice atual da posição no texto
  // speed: number = 150; // Velocidade de digitação em ms
  // pause: number = 1000; // Pausa ao finalizar a ação
  // interval: any; // Guarda o intervalo para limpar quando necessário

  // ngOnInit() {
  //   this.startTyping(); // Inicia o efeito de digitação ao carregar o componente
  // }

  // startTyping() {
  //   this.interval = setInterval(() => {
  //     if (!this.isDeleting && this.currentIndex < this.fullText.length) {
  //       this.currentIndex++;
  //       this.displayedText = this.fullText.substring(0, this.currentIndex);
  //     } else if (this.isDeleting && this.currentIndex > 1) {
  //       this.currentIndex--;
  //       this.displayedText = this.fullText.substring(0, this.currentIndex);
  //     }

  //     if (this.currentIndex === this.fullText.length) {
  //       clearInterval(this.interval);
  //       setTimeout(() => {
  //         this.isDeleting = true;
  //         this.startTyping();
  //       }, this.pause);
  //     } else if (this.currentIndex === 1 && this.isDeleting) {
  //       clearInterval(this.interval);
  //       setTimeout(() => {
  //         this.isDeleting = false;
  //         this.startTyping();
  //       }, this.pause);
  //     }
  //   }, this.speed);
  // }
}

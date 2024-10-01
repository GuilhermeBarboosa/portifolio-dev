import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showMenu: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // Observa as mudanças no tamanho da tela
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // Se a largura for menor ou igual a 768px, esconda o menu
          this.showMenu = false;
        } else {
          // Se a largura for maior que 768px, mostre o menu
          this.showMenu = true;
        }
      });
  }

  changeMenu() {
    this.showMenu ? (this.showMenu = false) : (this.showMenu = true);
  }
}

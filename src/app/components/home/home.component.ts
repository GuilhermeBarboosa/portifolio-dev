import { Component, Inject, Pipe, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardLanguageComponent } from '../../shared/card-language/card-language.component';
import Typewriter from 't-writer.js';
import { isPlatformBrowser } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardLanguageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public isSmallScreen = false;
  private writer: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observerText();
    }
  }

  private writerType(text: string) {
    let target = document.querySelector('.tw');

    if (this.writer) {
      target!.innerHTML = '';
    }

    this.writer = new Typewriter(target, {
      loop: true,
      typeColor: '#001aff',

      cursorColor: 'white',
      typeClass: 'type-span',
      cursorClass: 'cursor-span',

      typeSpeed: 'random',
    });

    this.writer.type(`${text}`).rest(500).start();
  }

  observerText() {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res: any) => {
        this.isSmallScreen = res.matches;

        if (this.isSmallScreen) {
          this.writerType('Guilherme');
        } else {
          this.writerType('Guilherme Barbosa');
        }
      });
  }
}

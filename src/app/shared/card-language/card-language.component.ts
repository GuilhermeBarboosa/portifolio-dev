import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-language',
  standalone: true,
  imports: [],
  templateUrl: './card-language.component.html',
  styleUrl: './card-language.component.css',
})
export class CardLanguageComponent {
  @Input() language: string = '';
  @Input() level: string = '';
  @Input() flag: string = '';
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-website';

  @ViewChild('experienceSection', { static: false })
  experienceSection!: ElementRef;

  scrollToExperience() {
    const element = document.getElementById('experience-section');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  openTelegram() {
    const telegramUrl = 'https://t.me/tarasovoa';
    window.open(telegramUrl, '_blank');
  }

  openMap() {
    const mapUrl = 'https://yandex.ru/maps/geo/saratov/53105257/?ll=46.007375%2C51.540862&source=serp_navig&z=10';
    window.open(mapUrl, '_blank');
  }
}

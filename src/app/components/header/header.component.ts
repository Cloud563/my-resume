import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() scrollToExperience = new EventEmitter<void>();
  @Output() openTelegram = new EventEmitter<void>();
  @Output() openMap = new EventEmitter<void>();

  onScrollToExperience() {
    this.scrollToExperience.emit();
  }

  onOpenTelegram() {
    this.openTelegram.emit();
  }

  onOpenMap() {
    this.openMap.emit();
  }
}

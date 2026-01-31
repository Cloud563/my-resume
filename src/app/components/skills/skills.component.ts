import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillCategory } from '../../models/skills.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @Input() skillsCategories: SkillCategory[] = [];
  @Output() scrollToSection = new EventEmitter<string>();
}

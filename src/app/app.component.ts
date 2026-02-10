import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PositionComponent } from './components/position/position.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DESCRIPTION_DATA } from './data/description.data';
import { EXPERIENCE_DATA } from './data/experience.data';
import { SKILLS_DATA } from './data/skills.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    DescriptionComponent,
    PositionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-website';
  experiences = EXPERIENCE_DATA;
  skillsCategories = SKILLS_DATA;
  description = DESCRIPTION_DATA;

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
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

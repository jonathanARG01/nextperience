import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  animations: [
    trigger('incrementAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class StatisticsComponent implements OnInit {
  @ViewChild('statisticsSection', { static: true }) statisticsSection!: ElementRef;

  revenue: number = 0;
  peopleReached: number = 0;
  conversionRate: number = 0;
  sectionInView: boolean = false;

  ngOnInit() {
    this.observeSection();
  }

  observeSection() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionInView = true;
            this.animateValues();
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    );

    observer.observe(this.statisticsSection.nativeElement);
  }

  animateValues() {
    const incrementInterval = setInterval(() => {
      if (this.revenue < 65) {
        this.revenue++;
      }
      if (this.peopleReached < 8) {
        this.peopleReached++;
      }
      if (this.conversionRate < 4) {
        this.conversionRate += 0.1;
      }

      if (this.revenue >= 65 && this.peopleReached >= 8 && this.conversionRate >= 4) {
        clearInterval(incrementInterval);
      }
    }, 100);
  }
}

import { Component, signal } from '@angular/core';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Education } from "./components/education/education";

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Experience,
    Projects,
    Skills,
    Contact,
    Footer,
    Education
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  private noScrollTimer?: ReturnType<typeof setTimeout>;
  private scrollHandler?: () => void;
  private scrollEndHandler?: () => void;

  protected handleNavigationClick(event: MouseEvent): void {
    const link = event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
      : null;
    if (!link?.hash) {
      return;
    }

    const host = document.getElementById(link.hash.slice(1));
    const section = host?.querySelector<HTMLElement>(':scope > section');
    if (!section) {
      return;
    }

    this.highlightAfterScroll(section);
  }

  private highlightAfterScroll(section: HTMLElement): void {
    this.cancelPendingHighlight();
    let scrolling = false;

    const highlight = (): void => {
      this.cancelPendingHighlight();
      this.playHighlight(section);
    };

    const onScroll = (): void => {
      scrolling = true;
    };

    this.scrollHandler = onScroll;
    this.scrollEndHandler = highlight;

    document.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scrollend', highlight, { once: true });

    this.noScrollTimer = setTimeout(() => {
      if (!scrolling) {
        highlight();
      }
    }, 120);
  }

  private cancelPendingHighlight(): void {
    clearTimeout(this.noScrollTimer);

    if (this.scrollHandler) {
      document.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = undefined;
    }

    if (this.scrollEndHandler) {
      document.removeEventListener('scrollend', this.scrollEndHandler);
      this.scrollEndHandler = undefined;
    }
  }

  private playHighlight(section: HTMLElement): void {
    section.classList.remove('is-highlighted');
    void section.offsetWidth;
    section.classList.add('is-highlighted');
    section.addEventListener('animationend', () => section.classList.remove('is-highlighted'), { once: true });
  }
}

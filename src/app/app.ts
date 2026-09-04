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
}

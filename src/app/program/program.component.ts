import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
}

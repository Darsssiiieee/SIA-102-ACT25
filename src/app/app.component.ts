import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./Components/footer/footer.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { BodyComponent } from "./Components/body/body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SIA102-ACT25';
}

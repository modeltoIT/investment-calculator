import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FormComponent]
})
export class AppComponent {}

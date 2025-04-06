import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FormComponent } from "./components/form/form.component";
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl:'app.component.css',
  imports: [HeaderComponent, FormComponent, TableComponent]
})
export class AppComponent {}

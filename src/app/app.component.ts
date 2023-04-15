import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { StoreService } from './store.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class AppComponent {
  static bootstrap() {
    bootstrapApplication(AppComponent, {
      providers: [importProvidersFrom(RouterModule.forRoot(routes))],
    });
  }
  constructor(public store: StoreService) {}
  add() {
    this.store.add();
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  store: StoreService;
  constructor() {
    this.store = inject(StoreService);
  }

  ngOnInit(): void {}
}

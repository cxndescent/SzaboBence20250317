import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() a: number = 0;
  @Input() b: number = 0;
  @Output() result: EventEmitter<number> = new EventEmitter<number>();

  add(): void {
    this.result.emit(this.a + this.b);
  }

  subtract(): void {
    this.result.emit(this.a - this.b);
  }
}
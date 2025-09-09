import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css'
})
export class ButtonComponent {

  baseColor = '#f89a2f'

  @Input() disabled = false;
  @Input() color = this.baseColor
  @Input() text = "Placeholder"
  @Output() clicked = new EventEmitter<void>()

}

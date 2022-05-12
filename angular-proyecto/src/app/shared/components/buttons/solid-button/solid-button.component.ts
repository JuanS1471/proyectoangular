import { Component, Input } from '@angular/core';
import { SOLID_BUTTON_TYPE_ENUM } from '../solid-button.type.enum';

@Component({
  selector: 'app-solid-button',
  templateUrl: './solid-button.component.html',
  styleUrls: ['./solid-button.component.css']
})
export class SolidButtonComponent {
  @Input() title = '';
  @Input() type: SOLID_BUTTON_TYPE_ENUM = SOLID_BUTTON_TYPE_ENUM.PRIMARY;
  @Input() url;
}

import { Component } from '@angular/core';
import { EmailUploadComponent } from './email-upload/email-upload.component';

@Component({
  selector: 'app-root',
  template: `<app-email-upload></app-email-upload>`,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [EmailUploadComponent],
})
export class AppComponent {
  title = 'Email Upload App';
}

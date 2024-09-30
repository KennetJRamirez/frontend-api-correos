import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-email-upload',
  standalone: true,
  templateUrl: './email-upload.component.html',
  styleUrls: ['./email-upload.component.css'],
  imports: [HttpClientModule, MatTableModule, MatCardModule],
})
export class EmailUploadComponent {
  displayedColumns: string[] = ['email'];
  dataSource = new MatTableDataSource<string>([]);

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.http
        .post<string[]>(
          'https://backend-api-correos.onrender.com/api/emails/upload',
          formData
        )
        .subscribe({
          next: (emails) => {
            this.dataSource.data = emails;
          },
          error: (error) => {
            console.error('Error uploading file:', error);
          },
        });
    }
  }
}

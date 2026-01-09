import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-container">
      <h2>Módulo Angular</h2>
      
      <div *ngIf="loading" class="loader">
        <div class="spinner"></div>
        <p>Cargando usuarios desde la API...</p>
      </div>

      <div class="grid-container" *ngIf="!loading && users.length > 0">
        <div class="user-card" *ngFor="let user of users">
          <div class="avatar">{{ user.name.charAt(0) }}</div>
          <h3>{{ user.name }}</h3>
          <p class="email">{{ user.email }}</p>
          <p class="company">🏢 {{ user.company.name }}</p>
        </div>
      </div>

      <div *ngIf="!loading && users.length === 0" class="error-msg">
        No se pudieron cargar los datos. Por favor, intenta de nuevo.
      </div>
    </div>
  `,
  styles: [`
    .main-container { padding: 20px; font-family: 'Segoe UI', Roboto, sans-serif; }
    h2 { text-align: center; color: #dd0031; margin-bottom: 30px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
    
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 20px;
    }

    .user-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      border: 1px solid #fee2e2; /* Rojo muy suave */
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .user-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 20px rgba(221, 0, 49, 0.1);
    }

    .avatar {
      width: 50px;
      height: 50px;
      background: #dd0031;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 15px;
      font-size: 1.5rem;
      font-weight: bold;
    }

    h3 { margin: 0; color: #1e293b; font-size: 1.1rem; }
    .email { color: #64748b; font-size: 0.9rem; margin: 5px 0; }
    .company { color: #94a3b8; font-size: 0.8rem; font-style: italic; }

    .loader { text-align: center; padding: 50px; color: #dd0031; }
    .error-msg { text-align: center; color: #dd0031; padding: 20px; border: 1px solid #dd0031; border-radius: 8px; }
  `]
})
export class AppComponent implements OnInit {
  users: any[] = [];
  loading = true;

  constructor(
    private http: HttpClient, 
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Angular: Error', err);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
  }
}
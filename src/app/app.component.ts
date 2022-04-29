import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataStorageService } from './services/common/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cognitalia';

  constructor(
    public router: Router,
    private dataStorageService:DataStorageService
  ) {
    this.clearBrowserStorage();
  }

  // Clears the browser sessionStorage when browsing to the home page
  private clearBrowserStorage(): void {
    this.router.events.subscribe(ev => {
      if(ev instanceof NavigationEnd) {
        if(ev.urlAfterRedirects === '/') {
          this.dataStorageService.clearStorage();
        }
      }
    })
  }
}

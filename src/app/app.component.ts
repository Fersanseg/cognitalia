import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { DataStorageService } from './services/common/data-storage.service';
import { slideInAnimation } from './utils/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'cognitalia';

  constructor(
    public router: Router,
    private dataStorageService:DataStorageService,
    private context:ChildrenOutletContexts
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

  public getRouteAnimationData() {
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

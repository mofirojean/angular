import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet, Routes} from "@angular/router";
import {NG_DOC_ROUTING} from "@ng-doc/generated";
import {NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent} from "@ng-doc/app";
import {NgDocButtonIconComponent, NgDocIconComponent, NgDocTooltipDirective} from "@ng-doc/ui-kit";

@Component({
  selector: 'app-docs',
  template: `
    <ng-doc-root>
      <ng-doc-navbar [leftContent]="ngDocNavbarLeft" [rightContent]="ngDocNavbarRight">
        <ng-template #ngDocNavbarLeft>
          <h3 style="margin: 0">MyAwesomeDoc</h3>
        </ng-template>
        <ng-template #ngDocNavbarRight>
          <a
            ngDocNavbarRight
            ng-doc-button-icon
            class="ng-doc-header-controls"
            size="large"
            href="https://github.com/me/my-repo"
            target="_blank"
            ngDocTooltip="Check my repo">me</a>
        </ng-template>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>
    </ng-doc-root>
  `,
  standalone: true,
  styleUrl: './docs.component.css',
  imports: [
    NgDocNavbarComponent,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocRootComponent,
    RouterOutlet,
    NgDocIconComponent,
    NgDocTooltipDirective,
    NgDocButtonIconComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsComponent {
}

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: NG_DOC_ROUTING,
  },
];

export default routes;

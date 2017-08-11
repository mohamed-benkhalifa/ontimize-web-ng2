import {
  // Optional,
  // Inject,
  // forwardRef,
  ElementRef,
  Injector,
  NgModule,
  Component,
  // OnInit,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { OSharedModule } from '../../shared';
import {
  AppMenuService,
  MenuGroup
} from '../../services';
import { InputConverter } from '../../decorators';
// import { OAppSidenavComponent } from './o-app-sidenav.component';
import { OAppSidenavMenuItemModule } from './o-app-sidenav-menu-item.component';

export const DEFAULT_INPUTS_O_APP_SIDENAV_MENU_GROUP = [
  'menuGroup : menu-group',
  'sidenavOpened : sidenav-opened'
];

export const DEFAULT_OUTPUTS_O_APP_SIDENAV_MENU_GROUP = [];

@Component({
  selector: 'o-app-sidenav-menu-group',
  inputs: DEFAULT_INPUTS_O_APP_SIDENAV_MENU_GROUP,
  outputs: DEFAULT_OUTPUTS_O_APP_SIDENAV_MENU_GROUP,
  template: require('./o-app-sidenav-menu-group.component.html'),
  styles: [require('./o-app-sidenav-menu-group.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class OAppSidenavMenuGroupComponent {
  // implements OnInit
  public static DEFAULT_INPUTS_O_APP_SIDENAV_MENU_GROUP = DEFAULT_INPUTS_O_APP_SIDENAV_MENU_GROUP;
  public static DEFAULT_OUTPUTS_O_APP_SIDENAV_MENU_GROUP = DEFAULT_OUTPUTS_O_APP_SIDENAV_MENU_GROUP;

  protected appMenuService: AppMenuService;

  public menuGroup: MenuGroup;

  @InputConverter()
  sidenavOpened: boolean = true;

  constructor(
    protected injector: Injector,
    protected elRef: ElementRef
    //   // @Optional() @Inject(forwardRef(() => OAppSidenavComponent)) protected sidenavComp: OAppSidenavComponent,
  ) {
    this.appMenuService = this.injector.get(AppMenuService);
  }

  // ngOnInit() {

  // }

  onClick() {
    let ul = $(this.elRef.nativeElement).find('.application-sidenav-menugroup-ul:first');
    let newMarginTop = 0;
    if (this.menuGroup.opened) {
      newMarginTop = -(ul.outerHeight() + 50);
    }
    ul.css('margin-top', newMarginTop);
    this.menuGroup.opened = !this.menuGroup.opened;
  }
}

@NgModule({
  imports: [
    CommonModule,
    OSharedModule,
    OAppSidenavMenuItemModule
  ],
  declarations: [
    OAppSidenavMenuGroupComponent
  ],
  exports: [OAppSidenavMenuGroupComponent]
})
export class OAppSidenavMenuGroupModule { }


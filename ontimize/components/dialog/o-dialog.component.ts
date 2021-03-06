import { Component, OnInit, Inject, ViewChild,
  NgModule,
  ModuleWithProviders,
  ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MdDialogModule, MdDialog } from '../material/ng2-material/index';
import { DialogService } from '../../services';

import { MdButtonModule } from '@angular/material';

import {OTranslateModule} from '../../pipes/o-translate.pipe';

@Component({
  selector: 'o-dialog',
  templateUrl: '/dialog/o-dialog.component.html',
  styleUrls: ['/dialog/o-dialog.component.css'],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None
})
export class ODialogComponent implements OnInit {

  protected static DEFAULT_OK_BUTTON_TEXT = 'OK';
  protected static DEFAULT_CANCEL_BUTTON_TEXT = 'CANCEL';

  @ViewChild('dialog')
  protected dialog: MdDialog;

  protected title: string;
  protected message: string;
  protected okButtonText: string;
  protected cancelButtonText: string;
  protected twoOptions: boolean;

  constructor(@Inject(DialogService) private dialogService: DialogService) {
  }

  public ngOnInit() {
    this.dialogService.dialog = this;
  }

  public alert(title : string, message : string, okButtonText? : string) : Promise<any> {
    this.twoOptions = false;
    this.title = title;
    this.message = message;
    this.okButtonText = (typeof (okButtonText) !== 'undefined') ? okButtonText : ODialogComponent.DEFAULT_OK_BUTTON_TEXT;
    this.dialog.onShow.subscribe(evt => this.onDialogShow(evt));
    return this.dialog.show();
  }

  public confirm(title : string, message : string, okButtonText? : string, cancelButtonText? : string) : Promise<any> {
    this.twoOptions = true;
    this.title = title;
    this.message = message;
    this.okButtonText = (typeof(okButtonText) !== 'undefined') ? okButtonText : ODialogComponent.DEFAULT_OK_BUTTON_TEXT;
    this.cancelButtonText = (typeof(cancelButtonText) !== 'undefined') ? cancelButtonText : ODialogComponent.DEFAULT_CANCEL_BUTTON_TEXT;

    this.dialog.onShow.subscribe(evt => this.onDialogShow(evt));
    return this.dialog.show();
  }

  public onDialogShow(evt: any) {
    if (evt.overlayRef._pane) {
      evt.overlayRef._pane.classList.add('o-dialog-fullscreen');
    }
  }
}


@NgModule({
  declarations: [ODialogComponent],
  imports: [CommonModule, MdButtonModule, MdDialogModule, OTranslateModule],
  exports: [ODialogComponent, CommonModule, MdButtonModule, MdDialogModule],
})
export class ODialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ODialogModule,
      providers: []
    };
  }
}

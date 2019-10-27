import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyPageComponent } from '../lazy/lazy-page/lazy-page.component';
import { LazyhomeComponent } from './lazyhome/lazyhome.component';
import { LazyRootComponent } from './lazy-root/lazy-root.component';
import { FlexLayoutModule } from '@angular/flex-layout'; //Flex-layout用モジュール

//Material2モジュールのインポート
import {
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,  // MatDialogに必要な記述
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';




@NgModule({
  declarations: [
    LazyPageComponent,
    LazyhomeComponent,
    LazyRootComponent,
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    FlexLayoutModule,
  ],

    // 初めに呼び出すコンポーネント
    bootstrap: [LazyRootComponent]  
})
export class LazyModule { }

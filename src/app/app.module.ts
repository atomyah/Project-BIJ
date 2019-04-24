//====================
// AppModule（アプリに必要なモジュール定義）クラス
//====================

//Angularモジュールのインポート
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';  // 追加
import { AngularFireModule } from '@angular/fire';  // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加


//Material2モジュールのインポート
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSelectModule,
  MatToolbarModule,
} from '@angular/material';

// 作成したコンポーネントのインポート
import {RootComponent} from './component/root/root.component';

// 作成したサービスのインポート

// ルーター関連
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.route';
import { BasicsComponent } from './component/basics/basics.component';
import { IntroductionComponent } from './component/introduction/introduction.component';
import { BenzolistComponent } from './component/basics/benzolist/benzolist.component';
import { HomeComponent } from './component/home/home.component';
import { BenzohistoryComponent } from './component/basics/benzohistory/benzohistory.component';
import { BenzowordsComponent } from './component/basics/benzowords/benzowords.component';
import { ContentsHeaderComponent } from './component/contents-header/contents-header.component';
import { PatientsTopComponent } from './component/patients/patients-top/patients-top.component';
import { PatientsAriticlesComponent } from './component/patients/patients-ariticles/patients-ariticles.component';
import { SafePipe } from './service/safe.pipe';
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { EditArticleComponent } from './admin/edit-article/edit-article.component';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { AdminTopComponent } from './admin/admin-top/admin-top.component';

//アプリで使用するモジュール定義
@NgModule({
   //モジュール
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatSliderModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSelectModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    //ルーターの定義
    RouterModule.forRoot(AppRoutes),
    //Firebaseの定義
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
  ],

  // 作成したコンポーネント 
  declarations: [
    RootComponent,
    IntroductionComponent,
    BasicsComponent,
    BenzolistComponent,
    HomeComponent,
    BenzohistoryComponent,
    BenzowordsComponent,
    ContentsHeaderComponent,
    PatientsTopComponent,
    PatientsAriticlesComponent,
    SafePipe,
    ArticleListComponent,
    EditArticleComponent,
    AddArticleComponent,
    AdminTopComponent,
  ],

  // DIするサービス 
  providers: [
  ],

    // 初めに呼び出すコンポーネント
  bootstrap: [RootComponent]
})

export class AppModule { 
}

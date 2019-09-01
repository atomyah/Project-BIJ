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
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular'; // 追加.FirebaseUIのモジュール
import { SeoService } from './service/seo.service'; //SEO対策
import { FlexLayoutModule } from '@angular/flex-layout'; //Flex-layout用モジュール
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core'; // ページ内アンカーへスクロールジャンプさせるためインストールしたモジュール
import { NgxPageScrollModule } from 'ngx-page-scroll'; // ngx-page-scroll-coreの簡易バージョン

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
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DoctorsTopComponent } from './component/doctors/doctors-top/doctors-top.component';
import { DoctorsArticlesComponent } from './component/doctors/doctors-articles/doctors-articles.component';
import { MediasTopComponent } from './component/medias/medias-top/medias-top.component';
import { MediasArticlesComponent } from './component/medias/medias-articles/medias-articles.component';
import { ContentsCommentComponent } from './component/contents-comment/contents-comment.component';
import { EditDialogComponent } from './component/contents-comment/edit-dialog/edit-dialog.component';
import { BenzolistEngComponent } from './component/basics/benzolist-eng/benzolist-eng.component';
import { IntroductionEngComponent } from './component/introduction-eng/introduction-eng.component';



// FirebaseUI初期化コード
const firebaseUiAuthConfig: firebaseui.auth.Config = {
  autoUpgradeAnonymousUsers: false, // 匿名認証ユーザー自動アップグレード
  signInFlow: 'popup', // redirect or popup
  signInOptions: [
  // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  /*  
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
  */

  //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
  // {
  //    requireDisplayName: false,
  //    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
  // },
 
  //  firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  　firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],

  /*
  tosUrl: 'http://localhost:6200/TOS', // 'Team Of Serviceのリンク先URL'
  privacyPolicyUrl: 'プライバシーポリシーのURL',
  signInSuccessUrl: 'http://localhost:6200/home',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  siteName: 'benzoinfojapan', 
  */

};


//アプリで使用するモジュール定義
@NgModule({
   //モジュール
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
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
    AngularFirestoreModule,  // 追加.Firestore用モジュール
    AngularFireAuthModule,  // 追加.angularfireのAuth用モジュール
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),　// FirebaseUI用のモジュール
    FlexLayoutModule, //Flex-layout用モジュール
    NgxPageScrollCoreModule, // ページ内アンカーへスクロールジャンプさせるためインストールしたモジュール
    NgxPageScrollModule,
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
    AdminLoginComponent,
    DoctorsTopComponent,
    DoctorsArticlesComponent,
    MediasTopComponent,
    MediasArticlesComponent,
    ContentsCommentComponent,
    EditDialogComponent,
    BenzolistEngComponent,
    IntroductionEngComponent,  
  ],

  // DIするサービス 
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},  // MatDialogに必要な記述
    SeoService
  ],

  // MatDialogに必要な記述
  entryComponents: [EditDialogComponent],

    // 初めに呼び出すコンポーネント
  bootstrap: [RootComponent]
})

export class AppModule { 
}

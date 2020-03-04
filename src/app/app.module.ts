//====================
// AppModule（アプリに必要なモジュール定義）クラス
//====================

//Angularモジュールのインポート
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';  // 追加
import { AngularFireModule } from '@angular/fire';  // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加
import { SeoService } from './service/seo.service'; //SEO対策
import { FlexLayoutModule } from '@angular/flex-layout'; //Flex-layout用モジュール



//Material2モジュールのインポート
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


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
import { WithdrawalsymptomsComponent } from './component/basics/withdrawalsymptoms/withdrawalsymptoms.component';
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
import { BenzolistEngComponent } from './component/basics/benzolist-eng/benzolist-eng.component';
import { IntroductionEngComponent } from './component/introduction-eng/introduction-eng.component';
import { GcseResultComponent } from './component/gcse-result/gcse-result.component';
import { GcseSearchComponent } from './component/gcse-search/gcse-search.component';
import { BingComponent } from './component/bing/bing.component';



//アプリで使用するモジュール定義
@NgModule({
   //モジュール
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    //ルーターの定義
    RouterModule.forRoot(AppRoutes),
    //Firebaseの定義
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFirestoreModule,  // 追加.Firestore用モジュール
    AngularFireAuthModule,  // 追加.angularfireのAuth用モジュール
    FlexLayoutModule, //Flex-layout用モジュール
  ],

  // 作成したコンポーネント 
  declarations: [
    RootComponent,
    IntroductionComponent,
    BasicsComponent,
    BenzolistComponent,
    WithdrawalsymptomsComponent,
    HomeComponent,
    BenzohistoryComponent,
    BenzowordsComponent,
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
    BenzolistEngComponent,
    IntroductionEngComponent,
    GcseResultComponent,
    GcseSearchComponent,
    BingComponent,
  ],

  // DIするサービス 
  providers: [
    SeoService,
  ],
    // 初めに呼び出すコンポーネント
  bootstrap: [RootComponent]
})

export class AppModule { 
}

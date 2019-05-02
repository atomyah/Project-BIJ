//====================
// ルータ定義
//====================

import {Routes} from "@angular/router";
import {RootComponent} from "./component/root/root.component";
import { IntroductionComponent } from './component/introduction/introduction.component';
import { BasicsComponent } from './component/basics/basics.component';
import { BenzolistComponent } from './component/basics/benzolist/benzolist.component';
import { HomeComponent } from './component/home/home.component';
import { BenzohistoryComponent } from './component/basics/benzohistory/benzohistory.component';
import { BenzowordsComponent } from './component/basics/benzowords/benzowords.component';
import { PatientsTopComponent } from './component/patients/patients-top/patients-top.component';
import { PatientsAriticlesComponent } from './component/patients/patients-ariticles/patients-ariticles.component';
import { DoctorsTopComponent } from './component/doctors/doctors-top/doctors-top.component';
import { DoctorsArticlesComponent } from './component/doctors/doctors-articles/doctors-articles.component';
import { MediasTopComponent } from './component/medias/medias-top/medias-top.component';
import { MediasArticlesComponent } from './component/medias/medias-articles/medias-articles.component';
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { EditArticleComponent } from './admin/edit-article/edit-article.component';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { AdminTopComponent } from './admin/admin-top/admin-top.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminGuard } from  './admin/admin.guard';


//urlパスと表示するコンポーネントの関連づけ
export const AppRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "introduction", component: IntroductionComponent},
    {path: "basics", component: BasicsComponent},
    {path: "basics/benzolist", component: BenzolistComponent},
    {path: "home", component: HomeComponent},
    {path: "basics/benzohistory", component: BenzohistoryComponent},
    {path: "basics/benzowords", component: BenzowordsComponent},
    {path: "patients-top", component: PatientsTopComponent},
    {path: "patients-article/:num", component: PatientsAriticlesComponent},
    {path: "doctors-top", component: DoctorsTopComponent},
    {path: "doctors-article/:num", component: DoctorsArticlesComponent},
    {path: "medias-top", component: MediasTopComponent},
    {path: "medias-article/:num", component: MediasArticlesComponent},
    {path: "admin/list", component: ArticleListComponent, canActivate: [AdminGuard]},
    {path: "admin/edit-article/:num/:collectionName", component: EditArticleComponent},
    {path: "admin/add-article", component: AddArticleComponent, canActivate: [AdminGuard]},
    {path: "admin/admin-top", component: AdminTopComponent, canActivate: [AdminGuard]},    
    {path: "admin", component: AdminLoginComponent},
];

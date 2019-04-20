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
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { ArticleManagerComponent } from './admin/article-manager/article-manager.component';
import { EditArticleComponent } from './admin/edit-article/edit-article.component';

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
    {path: "admin/list", component: ArticleListComponent },
    {path: "admin", component: ArticleManagerComponent},
    {path: "admin/edit-article/:num", component: EditArticleComponent},
];

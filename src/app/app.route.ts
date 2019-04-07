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

//urlパスと表示するコンポーネントの関連づけ
export const AppRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "introduction", component: IntroductionComponent},
    {path: "basics", component: BasicsComponent},
    {path: "basics/benzolist", component: BenzolistComponent},
    {path: "home", component: HomeComponent},
    {path: "basics/benzohistory", component: BenzohistoryComponent},
    {path: "basics/benzowords", component: BenzowordsComponent},
];

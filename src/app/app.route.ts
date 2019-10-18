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
import { ContentsCommentComponent } from './component/contents-comment/contents-comment.component';
import { BenzolistEngComponent } from './component/basics/benzolist-eng/benzolist-eng.component';
import { IntroductionEngComponent } from './component/introduction-eng/introduction-eng.component';
import { GcseResultComponent } from './component/gcse-result/gcse-result.component';
import { SearchUiComponent } from './component/search-ui/search-ui.component';


//urlパスと表示するコンポーネントの関連づけ
export const AppRoutes: Routes = [
    {path: "", component: HomeComponent,
    data: {
        title: 'ベンゾジアゼピン情報センター ー ホーム',
        description: 'ベンゾジアゼピンは長期連用すると処方量依存といってやめるのが非常に難しくなります。依存症(addiction)ではなく薬剤性神経システム傷害(Injury)です。それゆえ覚せい剤やヘロインなどの麻薬とは同じ土俵で対処してはいけません',
        keywords: 'ベンゾジアゼピン,ベンゾ,睡眠薬,抗不安薬,離脱,ベンゾジアゼピン依存,離脱症状,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,依存症,アルコール依存症,覚せい剤,麻薬,神経',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard.png',
        url: 'https://benzoinfojapan.org',
    }},
    {path: "introduction", component: IntroductionComponent,
    data: {
        title: 'ベンゾジアゼピン(睡眠薬、抗不安薬)概要',
        description: '睡眠薬、抗不安薬のほとんどはベンゾジゼアピン系薬剤に分類されます。ベンゾジアゼピンは決められた処方量を守っても重篤な障害を引き起こします。日本だけでなく世界中で蔓延処方され約10人にひとりが服用していますだよ',
        keywords: 'ベンゾジアゼピン,ベンゾ,睡眠薬,抗不安薬,離脱,ベンゾジアゼピン依存,離脱症状,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,依存症,アルコール依存症,覚せい剤,麻薬,神経',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard_introduction.png',
        url: 'https://benzoinfojapan.org/introduction',
    }},
    {path: "basics", component: BasicsComponent,
    data: {
        title: 'ベンゾ一般知識',
        description: 'ベンゾジアゼピン（睡眠薬、抗不安薬）に関する一般的なナレッジです',
        keywords: 'ベンゾジアゼピン,ベンゾ,睡眠薬,抗不安薬,離脱,ベンゾジアゼピン依存,離脱症状,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,歴史,バルビツール,処方可能,ベンゾリスト,用語集',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard.png',
        url: 'https://benzoinfojapan.org/basics',
    }},
    {path: "basics/benzolist", component: BenzolistComponent,
    data: {
        title: 'ベンゾジアゼピン薬剤一覧 - ジアゼパム換算表',
        description: '日本で処方可能なベンゾジアゼピン薬剤一覧です。諸外国よりかなり多い34種類あります。 - そしてジアゼパム換算表です。置換の際に必須となるデータです',
        keywords: 'ジアゼパム換算,置換,アルプラゾラム,ソラナックス,コンスタン,デパス,エチゾラム,リーゼ,クロチアゼパム,ジアゼパム,セルシン,ブロマゼパム,レキソタン,セニラン,ロフラゼプ酸エチル,メイラックス,ロラゼパム,ワイパックス,エスタゾラム,ユーロジン,クアゼパム,ドラール,ゾルピデム,マイスリー,ゾピクロン,アモバン,ニトラゼパム,ベンザリン,ネルボン,フルニトラゼパム,サイレース,ロヒプノール,ブロチゾラム,レンドルミン,ロルメタゼパム,エバミール,クロナゼパム,リボトリール,ランドセン,トフィソパム,グランダキシン,トリアゾラム,ハルシオン,クロキサゾラム,セパゾン,クロラゼプ酸,メンドン,クロルジアゼポキシド,コントール,バランス,タンドスピロン,セディール,フルジアゼパム,エリスパン,フルタゾラム,コレミナール,フルトプラゼパム,レスタス,メキサゾラム,メレックス,メダゼパム,レスミット,エスゾピクロン,ルネスタ,ニメタゼパム,エリミン,ハロキサゾラム,ソメリン,クアゼパム,ドラール,フルラゼパム,ダルメート,ベノジール,リルマザホン,リスミー,ロルメタゼパム,エバミール,ロラメット,クロバザム,マイスタン',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard.png',
        url: 'https://benzoinfojapan.org/basics',
    }},
    {path: "home", component: HomeComponent,
    data: {
        title: 'ベンゾジアゼピン情報センター ー ホーム',
        description: 'ベンゾジアゼピンは長期連用すると処方量依存といってやめるのが非常に難しくなります。依存症(addiction)ではなく薬剤性神経システム傷害(Injury)です。それゆえ覚せい剤やヘロインなどの麻薬とは同じ土俵で対処してはいけません',
        keywords: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,離脱症状,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,依存症,アルコール依存症,覚せい剤,麻薬,神経',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard.png',
        url: 'https://benzoinfojapan.org/home',
    }},
    {path: "basics/benzohistory", component: BenzohistoryComponent,
    data: {
        title: 'ベンゾジアゼピンの歴史',
        description: '1955年、スイスの製薬会社ロッシュの化学者（レオ・スターンバック）が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました',
        keywords: 'ベンゾ,ベンゾジアゼピン,睡眠薬,歴史,アシュトンマニュアル,離脱症状,依存症,歴史,バルビツール,レオ・スターンバック,ロッシュ,製薬会社',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/ValiumAd-benzohistory.jpg',
        url: 'https://benzoinfojapan.org/basics/benzohistory',
    }},
    {path: "basics/benzowords", component: BenzowordsComponent,
    data: {
        title: 'ベンゾジアゼピン用語集',
        description: '遷延性離脱症状、マイクロテーパリング減薬、ジアゼパム換算、キンドリングなどについて簡単に説明しています',
        keywords: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,非ベンゾ,非ベンゾジアゼピン,力価,半減期,キンドリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/ValiumAd-benzohistory.jpg',
        url: 'https://benzoinfojapan.org/basics/benzowords',
    }},
    {path: "patients-top", component: PatientsTopComponent,
    data: {
        title: '患者(被害者)のみなさまへ',
        description: '患者(被害者)のみなさまへ役立つ医療記事、テーパリング・水溶液タイトレーション法、質問集などを掲載しています。オススメ記事は「ベンゾ離脱中に脳の中で何が起きているか」',
        keywords: '減薬,断薬,マイクロテーパリング,依存症専門病院,精神科医,ベンゾ,ベンゾジアゼピン,ベンゾバディ,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,サプリメント,テーパリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用,アカシジア',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard_patients_top.png',
        url: 'https://benzoinfojapan.org/patients-top',
    }},
    {path: "patients-article/:num", component: PatientsAriticlesComponent,
    data: {
        title: '患者(被害者)のみなさまへ',
        description: '患者(被害者)のみなさまへ役立つ医療記事、テーパリング・水溶液タイトレーション法、質問集などを掲載しています。オススメ記事は「ベンゾ離脱中に脳の中で何が起きているか」',
        keywords: '減薬,断薬,マイクロテーパリング,依存症専門病院,精神科医,ベンゾ,ベンゾジアゼピン,ベンゾバディ,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,サプリメント,テーパリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用,アカシジア',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard_patients_top.png',
        url: 'https://benzoinfojapan.org/patients-top',
    }},
    {path: "doctors-top", component: DoctorsTopComponent,
    data: {
        title: 'ドクターのみなさまへ',
        description: 'ドクターのみなさまへ役立つ医療記事、論文を掲載しています。オススメ記事は「ベンゾジアゼピンテーパリング戦略とソリューション」',
        keywords: '医学論文,減薬方法,離脱法,GABA,医師,ドクター,クロライドチャンネル,塩化イオン,グルタミン酸,耐性,歯科齲蝕,甲状腺機能亢進症,過敏性腸症候群,エーラスダンロス症候群,橋本病,筋萎縮性側索硬化症,線維筋痛症,多発性硬化症,筋萎縮性脳脊髄炎,慢性疲労症候群,耳鳴り,めまい,聴覚過敏,視覚過敏,眼瞼痙攣,双極性障害,境界性人格障害,解離性障害,広場恐怖症,不眠症,パニック障害,多発性卵巣症候群,マイクロテーパリング,依存症専門病院,精神科医,遷延性離脱症状,テーパリング,ジアゼパム換算,フルオロキノロン,有機性脳症候群,慢性脳障害,CBI,ニューロン軸索,神経伝達物質,ダウンレギュレーション,HPA,NMDA,AMPA,LTP,Long Term Potentiation,カルシウムチャネル',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/pittman_prof.png',
        url: 'https://benzoinfojapan.org/doctors-top',
    }},
    {path: "doctors-article/:num", component: DoctorsArticlesComponent,
    data: {
        title: 'ドクターのみなさまへ',
        description: 'ドクターのみなさまへ役立つ医療記事、論文を掲載しています。オススメ記事は「ベンゾジアゼピンテーパリング戦略とソリューション」',
        keywords: '医学論文,減薬方法,離脱法,GABA,医師,ドクター,クロライドチャンネル,塩化イオン,グルタミン酸,耐性,歯科齲蝕,甲状腺機能亢進症,過敏性腸症候群,エーラスダンロス症候群,橋本病,筋萎縮性側索硬化症,線維筋痛症,多発性硬化症,筋萎縮性脳脊髄炎,慢性疲労症候群,耳鳴り,めまい,聴覚過敏,視覚過敏,眼瞼痙攣,双極性障害,境界性人格障害,解離性障害,広場恐怖症,不眠症,パニック障害,多発性卵巣症候群,マイクロテーパリング,依存症専門病院,精神科医,遷延性離脱症状,テーパリング,ジアゼパム換算,フルオロキノロン,有機性脳症候群,慢性脳障害,CBI,ニューロン軸索,神経伝達物質,ダウンレギュレーション,HPA,NMDA,AMPA,LTP,Long Term Potentiation,カルシウムチャネル',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/pittman_prof.png',
        url: 'https://benzoinfojapan.org/doctors-top',
    }},
    {path: "medias-top", component: MediasTopComponent,
    data: {
        title: 'メディアのみなさまへ',
        description: 'メディアのみなさまへ役立つ医療記事、資料を掲載しています。オススメ記事は「クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死」',
        keywords: '薬害,医原性,オピオイド,ベンゾジアゼピン情報協議会,ベンゾバディ,アカシジア,減薬,断薬,マイクロテーパリング,依存症,精神科医,ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,テーパリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用,拷問,生き地獄,',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/medias_3_toyaku.jpg',
        url: 'https://benzoinfojapan.org/medias-top',
    }},
    {path: "medias-article/:num", component: MediasArticlesComponent,
    data: {
        title: 'メディアのみなさまへ',
        description: 'メディアのみなさまへ役立つ医療記事、資料を掲載しています。オススメ記事は「クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死」',
        keywords: '薬害,医原性,オピオイド,ベンゾジアゼピン情報協議会,ベンゾバディ,アカシジア,減薬,断薬,マイクロテーパリング,依存症,精神科医,ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,テーパリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用,拷問,生き地獄,',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/medias_3_toyaku.jpg',
        url: 'https://benzoinfojapan.org/medias-top',
    }},
    {path: "admin/list", component: ArticleListComponent, canActivate: [AdminGuard]},
    {path: "admin/edit-article/:num/:collectionName", component: EditArticleComponent},
    {path: "admin/add-article", component: AddArticleComponent, canActivate: [AdminGuard]},
    {path: "admin/admin-top", component: AdminTopComponent, canActivate: [AdminGuard]},    
    {path: "admin", component: AdminLoginComponent},
    {path: "forum", component: ContentsCommentComponent,
    data: {
        title: '質問フォーラム',
        description: '薬事法違反になるため個人的な服薬指示・減薬指導にはお答えできません。事例やわたしのアイデアを紹介してもあくまで参考です。必ず自己責任で判断してください',
        keywords: '減薬,断薬,ジアゼパム換算,置換,アルプラゾラム,ソラナックス,コンスタン,デパス,エチゾラム,リーゼ,クロチアゼパム,ジアゼパム,セルシン,ブロマゼパム,レキソタン,セニラン,ロフラゼプ酸エチル,メイラックス,ロラゼパム,ワイパックス,エスタゾラム,ユーロジン,クアゼパム,ドラール,ゾルピデム,マイスリー,ゾピクロン,アモバン,ニトラゼパム,ベンザリン,ネルボン,フルニトラゼパム,サイレース,ロヒプノール,ブロチゾラム,レンドルミン,ロルメタゼパム,エバミール,クロナゼパム,リボトリール,ランドセン,トフィソパム,グランダキシン,トリアゾラム,ハルシオン,クロキサゾラム,セパゾン,クロラゼプ酸,メンドン,クロルジアゼポキシド,コントール,バランス,タンドスピロン,セディール,フルジアゼパム,エリスパン,フルタゾラム,コレミナール,フルトプラゼパム,レスタス,メキサゾラム,メレックス,メダゼパム,レスミット,エスゾピクロン,ルネスタ,ニメタゼパム,エリミン,ハロキサゾラム,ソメリン,クアゼパム,ドラール,フルラゼパム,ダルメート,ベノジール,リルマザホン,リスミー,ロルメタゼパム,エバミール,ロラメット,クロバザム,マイスタン',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/flower-avatar.jpg',
        url: 'https://benzoinfojapan.org/forum',
    }},
    {path: "basics/benzolisteng", component: BenzolistEngComponent,
    data: {
        title: 'Benzodiazepines List and Equivalents',
        description: 'Benzodiazepines(hypnotics and anxiolytics) List and Equivalents',
        keywords: 'sleeping pill,hypnotics,anxiolytics,benzodiazepine,benzo,alprazolam,xanax,klonopin,diazepam,valium,flunitrazepam,lorazepam,ativan,temazepam,zolpidem,ambien',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard.jpg',
        url: 'https://benzoinfojapan.org/basics/benzolisteng',
    }},
    {path: "introductioneng", component: IntroductionEngComponent,
    data: {
        title: 'Summary of Benzodiazepine',
        description: 'Even if a small amount of benzo is used for a long time, it becomes very difficult to stop it. This is clearly not “addiction” but “central nervous system injury”',
        keywords: 'sleeping pill,hypnotics,anxiolytics,drug,addiction,withdraw,withdrawal symptoms,Ashton Manual,insomnia,anxiety,fibromyalgia,tapering,PWS,benzodiazepine,benzo,alprazolam,xanax,klonopin,diazepam,valium,flunitrazepam,lorazepam,ativan,temazepam,zolpidem,ambien',
        twittercard: 'summary',
        twittersite: '@benzoinfojapan',
        twitterimage: 'https://benzoinfojapan.org/assets/images/twitcard_introduction',
        url: 'https://benzoinfojapan.org/introductioneng',
    }},
    {path: "gcs-result", component: GcseResultComponent},
    {path: "gcs-result/:query", component: GcseResultComponent},
    {path: "algoliasearch", component: SearchUiComponent},// algoliaテスト用
];

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DoctorsArticles } from '../../../class/doctors';
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-doctors-top',
  templateUrl: './doctors-top.component.html',
  styleUrls: ['../../../common.css', './doctors-top.component.css']
})
export class DoctorsTopComponent implements OnInit {

    /* コレクション名：doctorsarticles
       DoctorsArticles
      　DI名：doctorsarticles
    */

   doctorsarticlesRef: AngularFirestoreCollection<DoctorsArticles>;
   doctorsarticles: Observable<DoctorsArticles[]>;
 
   currentURL: string; 
   title: string;
   
 
   constructor(public router: Router, private valueSharedService: ValueSharedService, private db: AngularFirestore,private meta: Meta) {
     this.doctorsarticlesRef = this.db.collection<DoctorsArticles>('doctorsarticles'); 
     this.doctorsarticles = this.doctorsarticlesRef.valueChanges();

    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
    this.meta.updateTag({name: 'title', content: 'ドクターのみなさまへ'})
    this.meta.updateTag({name: 'description',content: '患者(被害者)ドクターのみなさまへ役立つ医療記事、論文を掲載しています。オススメ記事は「ベンゾジアゼピンテーパリング戦略とソリューション」'})
    this.meta.updateTag({name: 'keywords', content: '医学論文,減薬方法,離脱法,GABA,医師,ドクター,クロライドチャンネル,塩化イオン,グルタミン酸,耐性,歯科齲蝕,甲状腺機能亢進症,過敏性腸症候群,エーラスダンロス症候群,橋本病,筋萎縮性側索硬化症,線維筋痛症,多発性硬化症,筋萎縮性脳脊髄炎,慢性疲労症候群,耳鳴り,めまい,聴覚過敏,視覚過敏,眼瞼痙攣,双極性障害,境界性人格障害,解離性障害,広場恐怖症,不眠症,パニック障害,多発性卵巣症候群,マイクロテーパリング,依存症専門病院,精神科医,遷延性離脱症状,テーパリング,ジアゼパム換算,フルオロキノロン,有機性脳症候群,慢性脳障害,CBI,ニューロン軸索,神経伝達物質,ダウンレギュレーション,HPA,NMDA,AMPA,LTP,Long Term Potentiation,カルシウムチャネル'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/doctors-top'})
    this.meta.updateTag({property: 'og:title', content: 'ドクターのみなさまへ'})
    this.meta.updateTag({property: 'og:description', content: '患者(被害者)ドクターのみなさまへ役立つ医療記事、論文を掲載しています。オススメ記事は「ベンゾジアゼピンテーパリング戦略とソリューション」'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/pittman_prof.png'})  
    }
 
   ngOnInit() {
     this.title = 'ドクターの方へ';
     this.valueSharedService.currentTitle = this.title;
   }

}

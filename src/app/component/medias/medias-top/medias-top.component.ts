import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MediasArticles } from '../../../class/medias';  // Patientsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-medias-top',
  templateUrl: './medias-top.component.html',
  styleUrls: ['../../../common.css', './medias-top.component.css']
})
export class MediasTopComponent implements OnInit {

    /* コレクション名：mediasarticles
       インターフェース名：MediasArticles
      　DI名：mediasarticles
    */

   mediasarticlesRef: AngularFirestoreCollection<MediasArticles>;
   mediasarticles: Observable<MediasArticles[]>;
 
   currentURL: string; 
   title: string;

  constructor(public router: Router, private valueSharedService: ValueSharedService, private db: AngularFirestore,private meta: Meta) {
    this.mediasarticlesRef = this.db.collection<MediasArticles>('mediasarticles'); 
    this.mediasarticles = this.mediasarticlesRef.valueChanges();

    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
    this.meta.updateTag({name: 'title', content: 'メディアのみなさまへ'})
    this.meta.updateTag({name: 'description',content: 'メディアのみなさまへ役立つ医療記事、資料を掲載しています。オススメ記事は「クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死」'})
    this.meta.updateTag({name: 'keywords', content: '薬害,医原性,オピオイド,ベンゾジアゼピン情報協議会,ベンゾバディ,アカシジア,減薬,断薬,マイクロテーパリング,依存症,精神科医,ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,テーパリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用,拷問,生き地獄'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/medias-top'})
    this.meta.updateTag({property: 'og:title', content: 'メディアのみなさまへ'})
    this.meta.updateTag({property: 'og:description', content: '患者(被害者)メディアのみなさまへ役立つ医療記事、資料を掲載しています。オススメ記事は「クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死」'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/medias_3_toyaku.jpg'})   
   }

  ngOnInit() {
    this.title = 'メディアの方へ';
    this.valueSharedService.currentTitle = this.title;
  }

}

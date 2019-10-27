import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PatientsArticles } from '../../../class/patients';  // Patientsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-patients-top',
  templateUrl: './patients-top.component.html',
  styleUrls: ['../../../common.css', './patients-top.component.css']
})
export class PatientsTopComponent implements OnInit {
  
    /* コレクション名：patientsarticles
       インターフェース名：PatientsArticles
      　DI名：patientsarticles
    */

  patientsarticlesRef: AngularFirestoreCollection<PatientsArticles>;
  patientsarticles: Observable<PatientsArticles[]>;

  currentURL: string; 
  title: string;

  constructor(public router: Router, private valueSharedService: ValueSharedService, private db: AngularFirestore,private meta: Meta) {
    this.patientsarticlesRef = this.db.collection<PatientsArticles>('patientsarticles'); 
    this.patientsarticles = this.patientsarticlesRef.valueChanges();

    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
    this.meta.updateTag({name: 'title', content: '患者(被害者)のみなさまへ'})
    this.meta.updateTag({name: 'description',content: '患者(被害者)のみなさまへ役立つ医療記事、テーパリング・水溶液タイトレーション法、質問集などを掲載しています。オススメ記事は「ベンゾ離脱中に脳の中で何が起きているか」'})
    this.meta.updateTag({name: 'keywords', content: '減薬,断薬,マイクロテーパリング,依存症専門病院,精神科医,ベンゾ,ベンゾジアゼピン,ベンゾバディ,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,サプリメント,テーパリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用,アカシジア'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/patients-top'})
    this.meta.updateTag({property: 'og:title', content: '患者(被害者)のみなさまへ'})
    this.meta.updateTag({property: 'og:description', content: '患者(被害者)のみなさまへ役立つ医療記事、テーパリング・水溶液タイトレーション法、質問集などを掲載しています。オススメ記事は「ベンゾ離脱中に脳の中で何が起きているか」'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/twitcard_patients_top.png'})     
   }

  ngOnInit() {
    this.title = '患者(被害者)の方へ';
    this.valueSharedService.currentTitle = this.title;
  }

}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, Component, OnInit } from '@angular/core';
 // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
import { Router, ActivatedRoute } from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PatientsArticles } from '../../../class/patients';  // Patientsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import { map } from "rxjs/operators"; // 追加
import { SeoService } from '../../../service/seo.service';



@Component({
  selector: 'app-patients-ariticles',
  templateUrl: './patients-ariticles.component.html',
  styleUrls: ['../../../common.css', './patients-ariticles.component.css']
})
export class PatientsAriticlesComponent implements OnInit {

  patientsarticlesRef: AngularFirestoreCollection<PatientsArticles>;
  patientsarticles: Observable<PatientsArticles[]>;

  title: string;　// このページのタイトル. ngOnInit()にて設定
  currentURL: string; // Twitterシェアボタン設置に使用
  articlenum: string; // articleのid番号をarticleid変数に格納


  // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
  constructor(public route: Router, public router: ActivatedRoute, private valueSharedService: ValueSharedService, private db: AngularFirestore, private seo: SeoService) {
    this.articlenum = this.router.snapshot.paramMap.get('num');
    this.patientsarticlesRef = this.db.collection<PatientsArticles>('patientsarticles', ref =>  // where検索文
    ref.where('num', '==', this.articlenum));
    this.patientsarticles = this.patientsarticlesRef.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as PatientsArticles;
        const id = action.payload.doc.id;
        const num = action.payload.doc.data().num;
        this.title = data.title;        // Firestoreから記事のタイトルを取ってきてngOnInitでtitleタグ設定
        return { id,num,  ...data };
        });
      }));   
    console.log('patientsarticlesは、' + JSON.stringify(this.patientsarticles)); // うまくいってもarticlesは、{"_isScalar":false,"source":{"_isScalar":false},"operator":{}}というメッセージはでる
    console.log('subscribeしたものは、' + this.patientsarticles.subscribe() ); // [object Object]

    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)
   }


  ngOnInit() { 
    this.seo.generateTagsPatientsArticles(this.articlenum);
  }

    //以降はイベント履歴の記録用
  /*
    ngOnChanges() {
      console.log("@@@ngOnChanges");
    }
  
    ngDoCheck() {
      console.log("@@@ngDoCheck");
    }
  
    ngAfterContentInit() {
      console.log("@@@ngAfterContentInit");
    }
  
    ngAfterContentChecked() {
      console.log("@@@ngAfterContentChecked");
    }
  
    ngAfterViewChecked() {
      console.log("@@@ngAfterViewChecked");
      console.log("■■■" + this.currentURL);  
    }
  
  
    ngOnDestroy() {
      console.log("@@@ngOnDestroy");
    }
*/
}

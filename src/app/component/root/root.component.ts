//====================
// ルートコンポーネント
//　・コンポーネント共通の処理
//　　ヘッダー、メニュー、画面関連イベント検知
//====================

import {Component, ChangeDetectorRef} from '@angular/core';
import {Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PatientsArticles } from './../../class/patients';  // Patientsデータタイプインターフェース
import { DoctorsArticles } from './../../class/doctors';  // Doctorsデータタイプインターフェース
import { MediasArticles } from './../../class/medias';  // Mediasデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import {MediaMatcher} from '@angular/cdk/layout'; //sidenav用

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['../../common.css', './root.component.css']
  })
export class RootComponent {
  mobileQuery: MediaQueryList;  //sidenav用 
  private _mobileQueryListener: () => void; //sidenav用 


  patientsarticlesRef: AngularFirestoreCollection<PatientsArticles>;
  patientsarticles: Observable<PatientsArticles[]>;


  doctorsarticlesRef: AngularFirestoreCollection<DoctorsArticles>;
  doctorsarticles: Observable<DoctorsArticles[]>;


  mediasarticlesRef: AngularFirestoreCollection<MediasArticles>;
  mediasarticles: Observable<MediasArticles[]>;


  //ルーター定義、および値を受け渡すValueSharedServiceサービスを定義
   constructor(public router: Router, private titleService: Title, private db: AngularFirestore, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  　//sidenav用 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.patientsarticlesRef = this.db.collection<PatientsArticles>('patientsarticles'); 
    this.patientsarticles = this.patientsarticlesRef.valueChanges();

    this.doctorsarticlesRef = this.db.collection<DoctorsArticles>('doctorsarticles'); 
    this.doctorsarticles = this.doctorsarticlesRef.valueChanges();
 
    this.mediasarticlesRef = this.db.collection<MediasArticles>('mediasarticles'); 
    this.mediasarticles = this.mediasarticlesRef.valueChanges();  
  
   }




   ngOnInit() {
    this.titleService.setTitle('ベンゾジアゼピン情報センター')
       
    
      // 以下はグーグルカスタムサーチ用スクリプトタグ挿入
      let cx = '002441034172234205663:svlaurhzgs9';
      let gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      let s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s); 
    
   }


//メソッド内で遷移する
    async goIntroduction() {
      await this.router.navigate(["/introduction"]);
    }
    async goIntroductioneng() {
      await this.router.navigate(["/introductioneng"]);
    }
    async goBasics() {
      await this.router.navigate(["/basics"]);
    }
    async goBenzolist() {
      await this.router.navigate(["/basics/benzolist"]);
    }
    async goBenzolisteng() {
      await this.router.navigate(["/basics/benzolisteng"]);
    }      
    async goHistory() {
      await this.router.navigate(["/basics/benzohistory"]);
    }    
    async goWords() {
      await this.router.navigate(["/basics/benzowords"]);
    }
    async goWithdrawalsymptoms() {
      await this.router.navigate(["/basics/withdrawalsymptoms"]);
    }    

    async goPatients() {
      await this.router.navigate(["/patients-top"]);
    }

    async goDoctors() {
      await this.router.navigate(["/doctors-top"]);
    }

    async goMedias() {
      await this.router.navigate(["/medias-top"]);
    }

    async goForum() {
      await this.router.navigate(["/forum"]);
    }

//トップページへ戻る
    async goHome() {
     await this.router.navigate(['/']);
    } 

// 「患者（被害者）の方へ」の各ページに飛ばすメソッド
//（HTMLの方でrouterLink="/patients-article/{{ item.num }}" だとURLは変わるけどページ遷移しない
    async goPatAnother(item: PatientsArticles) {
      await this.router.navigate(["/patients-article/" + item.num]);
      location.reload();
    }

// 「ドクターの方へ」の各ページに飛ばすメソッド
//（HTMLの方でrouterLink="/patients-article/{{ item.num }}" だとURLは変わるけどページ遷移しない
    async goDocAnother(item: DoctorsArticles) {
      await this.router.navigate(["/doctors-article/" + item.num]);
      location.reload();
    }

// 「メディアの方へ」の各ページに飛ばすメソッド
//（HTMLの方でrouterLink="/patients-article/{{ item.num }}" だとURLは変わるけどページ遷移しない
    async goMedAnother(item: MediasArticles) {
      await this.router.navigate(["/medias-article/" + item.num]);
      location.reload();
    }


 // twitterシェアボタンの置き方。以下の通りAfterViewInit()で後から
 // 以下のようなタグを作ってインサートする。
 //<a href="https://twitter.com/benzoinfojapan?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @benzoinfojapan</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
/*
 ngAfterViewInit(){
  var element = document.createElement('a');//aタグを作ります
  element.setAttribute('href',"https://twitter.com/benzoinfojapan?ref_src=twsrc%5Etfw");
  element.setAttribute('class',"twitter-follow-button");
  element.setAttribute('data-show-count',"true");

  var script = document.createElement('script');//scriptタグを作ります
  script.async = true;
  script.setAttribute('src',"https://platform.twitter.com/widgets.js");
  script.setAttribute('charset','utf-8');

  var td = document.createElement('td'); //<table>の<td>タグを作ります.これは同じ<tr>要素の中に各シェアボタンをいれて横並びにするため
    td.setAttribute('id', "TwitterSharebutton")

    //aタグ、scriptタグの順で設置します
    var div = document.getElementById("beforeTwitterSharebutton");//ボタンを置きたい場所の手前の要素を取得
    div.parentNode.insertBefore(td, div.nextSibling);//ボタンを置きたい場所にtdタグを追加
    div.parentNode.insertBefore(element,div.nextSibling);//ボタンを置きたい場所にaタグを追加
    div.parentNode.insertBefore(script,div.nextSibling);//scriptタグを追加してJSを実行し、aタグをボタンに変身させる
  }
*/


}


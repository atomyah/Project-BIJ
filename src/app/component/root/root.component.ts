//====================
// ルートコンポーネント
//　・コンポーネント共通の処理
//　　ヘッダー、メニュー、画面関連イベント検知
//====================

import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['../../common.css', './root.component.css']
  })
export class RootComponent {

  //ルーター定義、および値を受け渡すValueSharedServiceサービスを定義
   constructor(public router: Router,private title: Title) {
   }

   ngOnInit() {
    this.title.setTitle('ベンゾジアゼピン情報センター')
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




 // twitterシェアボタンの置き方。以下の通りAfterViewInit()で後から
 // 以下のようなタグを作ってインサートする。
 //<a href="https://twitter.com/benzoinfojapan?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @benzoinfojapan</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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

}


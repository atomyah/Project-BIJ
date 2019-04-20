//====================
// ルートコンポーネント
//　・コンポーネント共通の処理
//　　ヘッダー、メニュー、画面関連イベント検知
//====================

import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['../../common.css', './root.component.css']
  })
export class RootComponent {

  //ルーター定義、および値を受け渡すValueSharedServiceサービスを定義
   constructor(public router: Router) {
   }
 

//メソッド内で遷移する
    async goIntroduction() {
      await this.router.navigate(["/introduction"]);
    }

    async goBasics() {
      await this.router.navigate(["/basics"]);
    }

    async goPatients() {
      await this.router.navigate(["/patients-top"]);
    }

//トップページへ戻る
    async goHome() {
     await this.router.navigate(['/']);
    } 

}


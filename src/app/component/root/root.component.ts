//====================
// ルートコンポーネント
//　・コンポーネント共通の処理
//　　ヘッダー、メニュー、画面関連イベント検知
//====================

import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
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
    this.title.setTitle('【最大薬害】睡眠薬・精神安定剤（ベンゾ薬） 処方量依存')
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

    async goDoctors() {
      await this.router.navigate(["/doctors-top"]);
    }

    async goMedias() {
      await this.router.navigate(["/medias-top"]);
    }

//トップページへ戻る
    async goHome() {
     await this.router.navigate(['/']);
    } 

}


import { Component, Input, OnInit } from '@angular/core';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../common.css','./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(private valueSharedService: ValueSharedService) { }

  // ngOnInit()の中でいいのかわからないがValueSharedService.childTitleにこのページのタイトルを渡す。
  ngOnInit() {
    this.title = 'ホーム';
    this.valueSharedService.currentTitle = this.title;
    
          // 以下はグーグルカスタムサーチ用スクリプトタグ挿入
          let cx = '002441034172234205663:svlaurhzgs9';
          let gcse = document.createElement('script');
          gcse.type = 'text/javascript';
          gcse.async = true;
          gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
          let s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(gcse, s);
  }

}

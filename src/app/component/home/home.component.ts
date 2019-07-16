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
  }

}

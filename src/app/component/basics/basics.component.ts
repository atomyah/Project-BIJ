import { Component, OnInit } from '@angular/core';
// basicschildren.tsからエキスポートされたBASICSDATAをimport.
import { BASICSDATA } from '../../class/basicschildren';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['../../common.css', './basics.component.css']
})
export class BasicsComponent implements OnInit {
/*
basicsdataにbasics配下のチャイルドコンポーネントの要約がJSON形式で格納されている.
class/basicschildren.tsを見るように.
    ＜こんな形＞
    export const BASICSDATA: Basics[] = [
    id: number;
    title: string;
    date: string;
    url: string;
    picture: string;
    feature: string;
    ]
*/
    basicsdata = BASICSDATA;　// basicschildren.tsからエキスポートされたBASICSDATA

    title: string;　// このページのタイトル. ngOnInit()にて設定
    

// コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService) { }

// service/value-shared.service経由でこのページのタイトルと
// チャイルドコンポーネントの要約(basicsdata)を渡す。
// valueSharedServiceからcontent-header.component.tsへと渡る。
// 'ベンゾ一般知識'配下のチャイルド達、「ベンゾ歴史」、「薬剤一覧」、「用語集」の各コンポーネントも同様。
  ngOnInit() {
    this.title = 'ベンゾ一般知識';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }

}



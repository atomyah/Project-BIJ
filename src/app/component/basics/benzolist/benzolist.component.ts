import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';


@Component({
  selector: 'app-benzolist',
  templateUrl: './benzolist.component.html',
  styleUrls: ['../../../common.css', './benzolist.component.css']
})
export class BenzolistComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService) { }

  ngOnInit() {
    this.title = 'ベンゾジアゼピン薬剤一覧';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }

}

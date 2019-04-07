import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';

@Component({
  selector: 'app-benzohistory',
  templateUrl: './benzohistory.component.html',
  styleUrls: ['../../../common.css', './benzohistory.component.css']
})
export class BenzohistoryComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService) { }

  ngOnInit() {
    this.title = 'ベンゾジアゼピンの歴史';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }

}

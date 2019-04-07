import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { BASICSDATA } from '../../../class/basicschildren';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';

@Component({
  selector: 'app-benzowords',
  templateUrl: './benzowords.component.html',
  styleUrls: ['../../../common.css', './benzowords.component.css']
})
export class BenzowordsComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService) { }

  ngOnInit() {
    this.title = '用語集';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }

}

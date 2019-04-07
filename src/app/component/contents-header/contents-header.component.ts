import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ValueSharedService } from '../../service/value-shared.service';

@Component({
  selector: 'app-contents-header',
  templateUrl: './contents-header.component.html',
  styleUrls: ['./contents-header.component.css']
})
export class ContentsHeaderComponent implements OnInit {
  title: string;
  basicsdata: object;

  constructor(public router: Router, private valueSharedService: ValueSharedService) {}

  ngOnInit() {
    this.title = this.valueSharedService.currentTitle;
    this.basicsdata = this.valueSharedService.basicsdata;// basicsdataはベンゾ一般知識でのみ使用するデータオブジェクト

  }
}

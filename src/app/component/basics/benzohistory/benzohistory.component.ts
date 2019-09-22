import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-benzohistory',
  templateUrl: './benzohistory.component.html',
  styleUrls: ['../../../common.css', './benzohistory.component.css']
})
export class BenzohistoryComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService,private meta: Meta) {
    this.meta.updateTag({name: 'title', content: 'ベンゾジアゼピンの歴史'})
    this.meta.updateTag({name: 'description',content: '1955年、スイスの製薬会社ロッシュの化学者（レオ・スターンバック）が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,歴史'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({name: 'twitter:title', content: 'ベンゾジアゼピン薬の歴史'})
    this.meta.updateTag({name: 'twitter:description', content: '1955年、スイスの製薬会社ロッシュの化学者（レオ・スターンバック）が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました'})
    this.meta.updateTag({name: 'twitter:image', content: 'https://benzoinfojapan.org/assets/picts/mict1.jpg'})    
   }

  ngOnInit() {
    this.title = 'ベンゾジアゼピンの歴史';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }


}

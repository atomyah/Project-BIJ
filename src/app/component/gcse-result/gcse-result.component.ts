import { Component, OnInit } from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';
import {DomSanitizer, SafeHtml, Title, Meta} from '@angular/platform-browser'; // DomSanitizerはグーグルカスタムサーチ用

@Component({
  selector: 'app-gcse-result',
  templateUrl: './gcse-result.component.html',
  styleUrls: ['../../common.css','./gcse-result.component.css']
})
export class GcseResultComponent implements OnInit {

  constructor(public router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('検索結果')

    // 以下、DomSanitizerはグーグルカスタムサーチ用スクリプトタグ挿入
    let cx = '002441034172234205663:svlaurhzgs9';
    let gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcse-search',
  templateUrl: './gcse-search.component.html',
  styleUrls: ['../../common.css','./gcse-search.component.css']
})
export class GcseSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

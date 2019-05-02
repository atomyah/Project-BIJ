import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import { AuthService } from  '../../service/auth.service';

@Component({
  selector: 'app-admin-top',
  templateUrl: './admin-top.component.html',
  styleUrls: ['../../common.css','./admin-top.component.css']
})
export class AdminTopComponent implements OnChanges, OnInit,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {
  

  constructor(
    private router: Router, 
    private title: Title, 
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  //フォームグループ
  collectionNameForm: FormGroup;

 
  ngOnInit() {
    this.title.setTitle('管理者ページ')

    // フォームコントロール作成
    this.collectionNameForm = this.fb.group({
      collectionName: ['']
    });  
  }

  // ゲッターを作成
  get collectionName() {
    return this.collectionNameForm.get('collectionName')
  }  

  public add_flag: boolean;
  toggleChild() {
    return this.add_flag = (!this.add_flag); //booleanを反転させる。チャイルドコンポーネント追加⇔リストボタンで切り替える
  }

   //以降はイベント履歴の記録用
  ngOnChanges() {
    console.log("@@@ngOnChanges");
  }

  ngDoCheck() {
    console.log("@@@ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("@@@ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("@@@ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("@@@ngAfterViewInit");
    console.log("■■■" + this.collectionName.value);  
  }

  ngAfterViewChecked() {
    console.log("@@@ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("@@@ngOnDestroy");
  }
}

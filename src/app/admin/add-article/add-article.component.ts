import { Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Article } from '../../service/article';
import { map } from "rxjs/operators"; // 追加
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['../../common.css', './add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articlesRef: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  //親コンポーネントから受け取るプロパティ
  @Input() collectionNameValue: string;
  //admin-topのセレクトボタンの切り替えでコレクション名を獲得するため、Firestoreへの接続はコードｈ
  //すべてngOnInit()からngOnChanges()へ移した。すなわち作業の最初の作業は必ずセレクトボタンの切り替え
  //から始めるということ。

  constructor(
    private firestore: AngularFirestore, 
    private fb: FormBuilder
    ) {}

 
/* ここからは追加用コード */

  //フォームグループ
articleForm: FormGroup;

//FormControllerとValidatorを作成
ngOnInit() {
  console.log("@@@ngOnInit");
  this.articleForm = this.fb.group({
    num: ['',[Validators.required, Validators.maxLength(2),Validators.pattern('^[0-9]+$')]],
    title: ['', [Validators.required]],
    title_origin: [''],
    date: [''],
    content: ['', [Validators.required]],
    author: [''],
    author_prof: [''],
    pictpath: [''],
    feature: [''],
  });  
}

// ゲッターを作成
get num() {
  return this.articleForm.get('num')
}
get title() {
  return this.articleForm.get('title')
}
get title_origin() {
  return this.articleForm.get('title_origin')
}
get date() {
  return this.articleForm.get('date')
}
get content() {
  return this.articleForm.get('content')
}
get author() {
  return this.articleForm.get('author')
}
get author_prof() {
  return this.articleForm.get('author_prof')
}
get pictpath() {
  return this.articleForm.get('pictpath')
}
get feature() {
  return this.articleForm.get('feature')
}

// データ追加メソッド
    onSubmit() {
        console.log("■■■" + this.collectionNameValue);       
      this.articlesRef.add({
        num: this.num.value,
        title: this.title.value,
        title_origin: this.title_origin.value,
        date: this.date.value,
        content: this.content.value,
        author: this.author.value,
        author_prof: this.author_prof.value,
        pictpath: this.pictpath.value,
        feature: this.feature.value,
      })
      .then(() => {
        alert('追加成功！');
        console.log('追加成功！');
      });

    }

    ngOnChanges() {
      console.log("@@@ngOnChanges");
      console.log("■■■" + this.collectionNameValue); //親コンポーネントadmin-topから受け取ったプロパティcollectionNameValue
      this.articlesRef = this.firestore.collection<Article>(this.collectionNameValue);
      this.articles = this.articlesRef.snapshotChanges().pipe
      (map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Article;
          const id = action.payload.doc.id;
          const num = action.payload.doc.data().num;
          return { id,num,  ...data };
          });
        }));   
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
    }
  
    ngAfterViewChecked() {
      console.log("@@@ngAfterViewChecked");
    }
  
    ngOnDestroy() {
      console.log("@@@ngOnDestroy");
    }
}

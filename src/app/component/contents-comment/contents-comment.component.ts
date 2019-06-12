import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'; // Inject, LOCALE_IDは現在日付獲得用
import { Router } from '@angular/router';
import { ValueSharedService } from '../../service/value-shared.service';
import { Post } from '../../class/faqpost';
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { formatDate } from '@angular/common'; // 現在日付獲得用
import { map } from "rxjs/operators"; // 追加
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-contents-comment',
  templateUrl: './contents-comment.component.html',
  styleUrls: ['../../common.css', './contents-comment.component.css']
})
export class ContentsCommentComponent implements OnInit {
  title: string;
  message: string;
  userName: string;
  uid: string;
  post: Post;
  posts: Observable<Post[]>;

  postsCollection: AngularFirestoreCollection<Post>; // 書きこみ用Firestoreの準備

  user: Observable<firebase.User>; // uidを獲得するためにuserオブジェクト変数

  constructor(
    public route: Router,
    private valueSharedService: ValueSharedService, 
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    @Inject(LOCALE_ID) private locale: string, // 現在日付獲得用
    public dialog: MatDialog,
  ) { 
      // uidを獲得するためにauthStateからsubscribeでuserのuidを取ってくる
    // 参考：https://stackoverflow.com/questions/45829611/safest-way-to-get-user-id-in-angularfire2
      this.user = this.afAuth.authState;
      this.afAuth.authState.subscribe(user => {
        if(user) {
          this.uid = user.uid;
        } else {
          // Empty the value when user signs out
          this.uid = null;
        }
      });
  }

 
  
  ngOnInit() {
    this.getPosts();
    console.log('◆◆◆' + this.uid)
    this.title = '質問フォーラム';
    this.valueSharedService.currentTitle = this.title;
  }


  addPost() {
    let now = new Date();     // 現在日付
    this.post = {
      id: '',
      userName: this.userName,
      message: this.message,
      created: formatDate(now,"yyyy/MM/dd HH:mm", this.locale), // 現在日付をフォーマットしてcreatedに
      uid: this.uid,                                            // 取ってきたuidをそのままデータベースのuidフィールドに
    };

    this.db
      .collection('commentsfaqs')
      .add(this.post)         // add()で追加するとドキュメントidはランダムで付与される（例：hLK4D8Y7vi0E7uVDw81y）
      .then(docRef => {
        this.postsCollection.doc(docRef.id).update({  // docRef.idがドキュメントのランダムID（例：hLK4D8Y7vi0E7uVDw81y）
          id: docRef.id                          // それをid:string列にupdate()で割り当てている
        });
        this.userName = '';
        this.message = '';
        this.uid = '';
      })
      .catch(async error => {
        console.log('■■■エラー'+ error.toString())
      })
  }

  getPosts() {
    this.postsCollection = this.db.collection(
      'commentsfaqs', ref => ref.orderBy('created', 'asc')  // コレクションの参照・並べ替え
    );

  /* 簡単なやり方。posts: Observable<Post[]>;にObservableをつけない。posts: Post[];とする
    this.postsCollection.valueChanges().subscribe(data => { // データをvalueChanges()で監視、変更があったらsubscribe(data)でそれを取得
     this.posts = data;
    });
  */
    this.posts = this.postsCollection.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Post;
        const id = action.payload.doc.id;
        const uid = action.payload.doc.data().uid;
        return { id,uid,  ...data };
        });
      }));
      console.log('subscribeしたものは、' + this.posts.subscribe() );
  }


  deletePost(post: Post) {
    if (confirm("消しちゃうよ～?")) {
    this.postsCollection
      .doc(post.id)
      .delete()
      .then(async() => {
        alert('削除完了!')
      })
    }
  }

  // 別ウインドウでfirebaseui画面を開く(やめた。2019/6/11)
  goToLink(url: string){
    window.open(url, "_blank", "width=400,height=500");
  }

  // サインアウト
  async logout() {
    this.afAuth.auth.signOut();
  }

  // Mat-Dialogでedit-dialog.component（編集用モーダル）を開く
  openDialog(post: Post) {
    this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: post,
      disableClose: false
    });
  }

}

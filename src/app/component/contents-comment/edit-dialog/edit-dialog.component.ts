// EditDialogComponentはコメントの編集ボタンを押すと表示されるモーダル。そこでコメントを編集する。
// 事実上、違反投稿に「この投稿は削除しました」と管理者権限で書き込むために作った機能

import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Post } from 'src/app/class/faqpost';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['../../../common.css', './edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  message: string;
  post: Post;
  posts: Post[];

  postsCollection: AngularFirestoreCollection<Post>;

  constructor(
    private db: AngularFirestore,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) { }

  ngOnInit() {
  }

  onNoClick() {           // これはたぶん余白をクリックしたときだな
    this.dialogRef.close();
  }

  onClickCloseButton() {
    this.dialogRef.close();
  }

  updatePost(post:Post) {
    this.db
    .collection('commentsfaqs')
    .doc(post.id)   
    .update({message: this.message})  
    .then(async => {
      alert('コメントを更新した');         
      })
    .catch(async error => {
      console.log('■■■エラー'+ error.toString())
    })
  }

}

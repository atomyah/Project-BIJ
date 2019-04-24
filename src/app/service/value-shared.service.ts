import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueSharedService {
  // 受け渡しを行うプロパティ
  public currentTitle = '';
//  public currentCollectionName: string; // collectionNameを入れるvalue. admin-topのセレクトフォームから渡ってくる。

  // basicsdataはベンゾ一般知識でのみ使用するデータオブジェクト. 他のコンポーネントでは使用しない
  public basicsdata = null;

  constructor() { }

}

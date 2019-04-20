import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueSharedService {
  // 受け渡しを行うプロパティ
  currentTitle = '';
  // basicsdataはベンゾ一般知識でのみ使用するデータオブジェクト. 他のコンポーネントでは使用しない
  basicsdata = null;

  constructor() { }
}

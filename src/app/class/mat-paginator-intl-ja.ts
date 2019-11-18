import { MatPaginatorIntl } from '@angular/material/paginator';

export class MatPaginatorIntlJa extends MatPaginatorIntl {
  itemsPerPageLabel = '件数';
  nextPageLabel     = '次へ';
  previousPageLabel = '戻る';

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) { return `${length} 件中 0`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

    return `${length} 件中 ${startIndex + 1} - ${endIndex}`;
  }
}
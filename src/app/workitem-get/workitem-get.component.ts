import { Component, OnInit } from '@angular/core';
import WorkItems from '../WorkItems';
import { WorkitemsService } from '../workitems.service';
import { SelectItem, SortEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-workitem-get',
  templateUrl: './workitem-get.component.html',
  styleUrls: ['./workitem-get.component.css']
})
export class WorkitemGetComponent implements OnInit {

  workitems: WorkItems[];
  cols: any[];
  types: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  dateFilters: any;

  constructor(private i: WorkitemsService) { }

  ngOnInit() {
    this.i
      .getWorkItems()
      .subscribe((data: WorkItems[]) => {
        this.workitems = data;
    });

    this.cols = [
      { field: '_id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'state', header: 'State' },
      { field: 'created_date', header: 'Created Date' },
      { field: 'workitem_type', header: 'Workitem Type' }
    ];

    this.types = [
      { label: 'Todos', value: null },
      { label: 'Bug', value: 'Bug' },
      { label: 'Epic', value: 'Epic' },
      { label: 'Feature', value: 'Feature' },
      { label: 'Issue', value: 'Issue' },
      { label: 'Task', value: 'Task' },
      { label: 'Test Case', value: 'Test Case' },
      { label: 'User Story', value: 'User Story' }
    ];

  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
  }
  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, 'year', 'gt');
    }, 250);
  }
}

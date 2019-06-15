import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gtd-table-monitoring',
  templateUrl: './table-monitoring.component.html',
  styleUrls: ['./table-monitoring.component.scss']
})
export class TableMonitoringComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  onDetails() {
    this.router.navigate(['../../../details-pending-request/' + 43], { relativeTo: this.activatedRoute });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'gtd-filter-monitoring',
  templateUrl: './filter-monitoring.component.html',
  styleUrls: ['./filter-monitoring.component.scss']
})
export class FilterMonitoringComponent implements OnInit {
  filtersFormAssistReport: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.filtersFormAssistReport = this.formBuilder.group({
      id_depto: ['0', [Validators.required]],
      fecha: [ new Date(), [Validators.required]],
    });
  }

}

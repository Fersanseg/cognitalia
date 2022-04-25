import { Component, Input, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/tests.service';
import { IGlobalResults } from 'src/app/utils/interfaces/iglobal-results';

@Component({
  selector: 'app-global-results',
  templateUrl: './global-results.component.html',
  styleUrls: ['./global-results.component.scss']
})
export class GlobalResultsComponent implements OnInit {
  public globalTestResults!:IGlobalResults[];

  constructor(private testsService:TestsService) { }

  ngOnInit(): void {
    this.testsService.getAllGlobalResults().subscribe(response => this.globalTestResults = response)
  }
}
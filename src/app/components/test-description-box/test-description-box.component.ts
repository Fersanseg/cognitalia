import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataStorageService } from 'src/app/services/common/data-storage.service';

@Component({
  selector: 'app-test-description-box',
  templateUrl: './test-description-box.component.html',
  styleUrls: ['./test-description-box.component.scss'],
  encapsulation: ViewEncapsulation.None // Need to disable Angular's Cross-site Scripting to style our testData resource
})
export class TestDescriptionBoxComponent implements OnInit {
  testDescription!: string;

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit(): void {
    this.setTestDescription();
  }

  // Gets the test description from the browser's sessionStorage
  private setTestDescription(): void {
    let desc = this.dataStorageService.getData("testDescription");
    if(desc) {
      this.testDescription = desc;
    } else {
      desc = this.dataStorageService.setAndGetData("testDescription", history.state.descriptionOfTest)
      this.testDescription = desc;
    }
  }
}

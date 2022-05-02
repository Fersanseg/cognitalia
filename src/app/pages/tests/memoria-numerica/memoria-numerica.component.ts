import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/services/common/data-storage.service';
import { MnumService } from 'src/app/services/memoria-numerica/mnum.service';

@Component({
  selector: 'app-memoria-numerica',
  templateUrl: './memoria-numerica.component.html',
  styleUrls: ['./memoria-numerica.component.scss']
})
export class MemoriaNumericaComponent implements OnInit {
  public testDescription!: string|null; 
  public testFinished!:Observable<boolean>;
  public showResults:boolean = false;
  public results!:string;

  constructor(private dataStorageService:DataStorageService, private mnumService:MnumService) { }

  ngOnInit(): void {
    this.getDescription();
    this.testFinished = this.mnumService.getTestFinished();
    this.testFinished.subscribe(s => {
      if(s) {
        this.results = this.mnumService.getResults();
      }
    });
  }
  
  // Gets the test description from the browser's sessionStorage
  private getDescription(): void {
    this.testDescription = this.dataStorageService.getData("TestDescription") || "Descripción del test no encontrada";
  }
}

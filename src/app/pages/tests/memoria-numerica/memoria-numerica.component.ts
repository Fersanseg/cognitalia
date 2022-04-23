import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-memoria-numerica',
  templateUrl: './memoria-numerica.component.html',
  styleUrls: ['./memoria-numerica.component.scss']
})
export class MemoriaNumericaComponent implements OnInit {
  testDescription!: string|null; 

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit(): void {
    this.getDescription();
  }
  
  // Gets the test description from the browser's sessionStorage
  private getDescription(): void {
    this.testDescription = this.dataStorageService.getData("TestDescription") || "Descripción del test no encontrada";
  }
}

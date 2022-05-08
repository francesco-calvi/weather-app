import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-input",
  template: `
    <form id="searchForm" (ngSubmit)="handleSubmit($event)">
      <input [(ngModel)]="inputValue" name="inputValue" type="text" placeholder="Search location" required />
    </form>
  `,
  styleUrls: ["./search-input.component.css"]
})

export class SearchInputComponent {
  @Output() sendInputValue = new EventEmitter();  
  inputValue = "";
  
  handleSubmit(e: any) {
    e.preventDefault();    
    this.sendInputValue.emit(this.inputValue.toLowerCase());
    this.inputValue = "";
  }
}
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public message : {message:string}) { }

  ngOnInit(): void {

  }

  onBack() {
    
  }

}

import { NgModule } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ]
})
export class MaterialModule { }

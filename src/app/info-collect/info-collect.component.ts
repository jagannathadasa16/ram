import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-collect',
  templateUrl: './info-collect.component.html',
  styleUrls: ['./info-collect.component.css']
})
export class InfoCollectComponent implements OnInit {
  basicInfoForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
     private httpClient: HttpClient, private router: Router, private dialogRef: MatDialogRef<InfoCollectComponent>) { }

  ngOnInit(): void {
    this.basicInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      emailId: ['', Validators.required],
      mobile: ['', Validators.required],
      about: ['', Validators.required]
    })
    
  }
  saveForm(){
    console.log(this.basicInfoForm.value);
    this.httpClient.post('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=devotee', this.basicInfoForm.value).subscribe(res =>{
      console.log(res);
      this.basicInfoForm.reset();
      // this.router.navigate(['/navigation']);
      this.dialogRef.close();
    }),
    (error: any) =>{
      console.log(error);
      
    }
  }
}

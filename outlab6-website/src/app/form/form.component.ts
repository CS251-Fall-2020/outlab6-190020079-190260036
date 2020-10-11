import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormserviceService],
})
export class FormComponent implements OnInit {
  feedbacks: string[] = ['Great', 'Okay', 'Not Good'];
  initName="";
  initEmail="";
  initFeedback="";
  initComment="";

  infoForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, 
      Validators.email]],
    feedback: ['Great', Validators.required],
    comment: [''],
  }); 

  constructor(
    private fb: FormBuilder,
    private formserv: FormserviceService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void { 
    this.formserv.getIntialValues().subscribe(
      response => {
        this.initName = response.name;
        this.initEmail = response.email;
        this.initFeedback = response.feedback;
        this.initComment = response.comment;
        this.infoForm.patchValue({
          name: this.initName,
          email: this.initEmail,
          feedback: this.initFeedback,
          comment: this.initComment,
        });
      },
      error => {console.log('error', error)}
    ); 
  }

  onSubmit() {
    let formdata = this.infoForm.getRawValue();
    let serializedForm = JSON.stringify(formdata);

    console.log(serializedForm);

    this.formserv.postForm(serializedForm).subscribe(
      response => {
        // console.log(response);
        this.openDialog();
      },
      error => {
        // console.log('error', error);
        this.openFailureDialog();
      }
    );
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openFailureDialog() {
    this.dialog.open(DialogElementsExampleFailure);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}

@Component({
  selector: 'dialog-elements-example-failure',
  templateUrl: 'dialog-elements-example-failure.html',
})
export class DialogElementsExampleFailure {}


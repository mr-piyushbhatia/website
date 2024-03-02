import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
// import { AngularFirestore } from "@angular/fire/firestore";
import { Firestore,getFirestore, provideFirestore , addDoc, collection} from '@angular/fire/firestore';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Master JI";
  queryForm;

  constructor(
    private fb: FormBuilder,
    // private firestore: AngularFirestore,
    private afs: Firestore,
    private toastr: ToastrService
  ) {
    this.queryForm = this.fb.group({
      message: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  submitQuery() {
    console.log(this.queryForm.value);
    var data = {
      message: this.queryForm.value.message,
      email: this.queryForm.value.email,
      date: new Date(),
    };
    // const db = getFirestore();

    const colref = collection(this.afs,"query");
      addDoc(colref,data)
      .then(() => this.toastr.success("You can also call us at 9902127313","Thank You, We will contact you soon!",{ timeOut: 6000}));
  }
}


//Thank You, We will contact you soon!
//You can also call us at 9902127313

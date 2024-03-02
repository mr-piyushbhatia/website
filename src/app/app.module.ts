import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// // import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getStorage, provideStorage } from '@angular/fire/storage';



// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';




import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    TermsConditionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot() , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

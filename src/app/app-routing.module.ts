import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TermsConditionComponent } from "./terms-condition/terms-condition.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "termcondition",
    component: TermsConditionComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

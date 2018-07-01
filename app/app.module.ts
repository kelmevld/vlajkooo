import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { HttpModule, Http } from '@angular/http';
import { StudentServiceService } from './manage-student/student-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from'@angular/forms';
import { NamepPipe } from './manage-student/namep.pipe';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageStudentComponent,
    NamepPipe,
    EditStudentComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path:"showStudents", component: ManageStudentComponent }, 
      { path: "editStudent/:id" ,component: EditStudentComponent },
    ]),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

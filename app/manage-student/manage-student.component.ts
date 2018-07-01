import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {

  nameofstudent:string = "";

  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    smer: new FormControl('')
  });

  constructor(private studService:StudentServiceService) { }
  students:any = [];
  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  createStudent() {
    if(this.form.valid) {
      this.studService.createStudent(this.form.value).subscribe(data => {
        console.log(data);
      });
    }
  }

  getStudentById(id) {
    this.studService.getStudById(id).subscribe(data => {
      console.log(data);
    });
  }

  get name() {
    return this.form.get('name');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get smer() {
    return this.form.get('smer');
  }

}

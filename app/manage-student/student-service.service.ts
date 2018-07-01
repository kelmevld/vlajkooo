import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }

  getStudents() {
    return this.http.get("http://127.0.0.1/IT255-Vezbanje/getStudent.php");
  }

  createStudent(formData) {
   // let param = JSON.stringify(formData);
    return this.http.post("http://127.0.0.1/IT255-Vezbanje/createStudent.php", {
      "name": formData['name'],
      "lastName": formData['lastName'],
      "smer": formData['smer']
    });
  }

  getStudById(id) {
    return this.http.get("http://127.0.0.1/IT255-Vezbanje/getStudentId.php?id="+id);
  }

}

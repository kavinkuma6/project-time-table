import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from 'src/models/department.model';
import { DEPARTMENTS_DATA } from '../mock/departments.mock';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getDepartments(): Observable<Department[]> {
    return of(DEPARTMENTS_DATA);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { generateTimeTable } from 'src/app/utils/time-table-generator.util';
import { Department } from 'src/models/department.model';
import { Semester } from 'src/models/semester.model';
import { Subject } from 'src/models/subject.model';
import { TimeTable } from 'src/models/time-table.model';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss'],
})
export class TimeTableComponent implements OnInit {
  departments: Department[] = [];
  department: Department;
  semesters: Semester[] = [];
  semester: Semester;
  subjects: Subject[];
  selectedSubjects: Subject[] = [];
  timeTableData: TimeTable[] = [];
  erroMsg: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDepartments().subscribe((d) => {
      this.departments = d;
    });
  }

  onDepartmentSelected() {
    this.semesters = this.department.semesters;
  }

  onSemesterSelected() {
    this.subjects = this.semester.subjects;
  }

  onSubmit() {
    if (!this.isProperSelection) {
      this.timeTableData = [];
      return;
    }
    this.timeTableData = generateTimeTable(this.selectedSubjects);
  }

  private get isProperSelection(): boolean {
    if (this.selectedSubjects.length !== 5) {
      this.erroMsg = 'Should contain 5 selections';
      return false;
    } else if (
      this.selectedSubjects.filter((s) => s.isMajor).length !== 3 ||
      this.selectedSubjects.filter((s) => !s.isMajor).length !== 2
    ) {
      this.erroMsg = 'Should contain 3 major and 2 non major';
      return false;
    }
    this.erroMsg = '';
    return true;
  }
}

import { Subject } from './subject.model';

export interface TimeTable {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
  subjects: Subject[];
}

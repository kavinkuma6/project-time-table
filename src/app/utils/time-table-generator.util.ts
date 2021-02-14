import * as _ from 'lodash';
import { Subject } from 'src/models/subject.model';
import { TimeTable } from 'src/models/time-table.model';

export const generateTimeTable = (subjects: Subject[]): TimeTable[] => {
  return ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map(
    (d: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday') => ({
      day: d,
      subjects: _.shuffle(subjects),
    })
  );
};

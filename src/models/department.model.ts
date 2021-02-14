import { Semester } from "./semester.model";

export interface Department{
    id: string,
    name: string,
    semesters: Semester[]
};

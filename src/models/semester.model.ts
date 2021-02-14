import { Subject } from "./subject.model";

export  interface Semester{
    id: string,
    name: string,
    subjects: Subject[]
};
import { BehaviorSubject } from "rxjs";

export interface IFullTable {
    subjectTable: BehaviorSubject<{data: any[], total: number;}>;
    /**
     * Get data of table
    */
    getData: () => void;
    getCurrentItems: any[];
    initialData: {data: any[], total:number}
}
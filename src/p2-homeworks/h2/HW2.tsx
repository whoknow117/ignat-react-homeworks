import React, {useState} from "react";
import Affairs from "./Affairs";
import classes from './HW2.module.css';


export type AffairPriorityType = "low" | "middle" | "high";
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
    color: string
};
export type FilterType = "all" | AffairPriorityType;


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high", color: '#fc7979'},
    {_id: 2, name: "anime", priority: "low", color: '#ffe9ad'},
    {_id: 3, name: "games", priority: "low", color: '#ffe9ad'},
    {_id: 4, name: "work", priority: "high", color: '#fc7979'},
    {_id: 5, name: "html & css", priority: "middle", color: '#ffb68c'},
];


export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    if (filter === "low") return affairs.filter(a => a.priority === "low")
    if (filter === "middle") return affairs.filter(a => a.priority === "middle")
    if (filter === "high") return affairs.filter(a => a.priority === "high")
    else return affairs;
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div className={classes.affairsWrapper}>

            homeworks 2


            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />


        </div>
    );
}

export default HW2;

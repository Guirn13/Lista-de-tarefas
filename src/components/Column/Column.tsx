import "./Column.css";

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Task } from "./Task/Task";

interface ColumnProps {
    tasks: { id: string; title: string }[];
}

export const Column: React.FC<ColumnProps> = ({ tasks }) => {
    return (
        <div className='Column'>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task) => (<Task id={task.id} title={task.title} key={task.id}
                />))}
            </SortableContext>
        </div>
    )
}

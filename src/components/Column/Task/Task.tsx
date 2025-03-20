import "./Task.css";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { HiOutlineMenu } from "react-icons/hi"

interface TaskProps {
    id: string;
    title: string;
}

export const Task: React.FC<TaskProps> = ({ id, title }) => {
    const { listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div ref={setNodeRef} style={style} className="task">
            <HiOutlineMenu {...listeners} className="drag-handle" />
            <input type="checkbox" className="checkbox" />
            {title}
        </div>
    );
};

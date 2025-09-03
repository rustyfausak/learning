import Cell from './Cell.jsx';
import { useDroppable } from '@dnd-kit/core';

export default function DroppableCell(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: `droppable-${props.cellIndex}`,
    });
    const droppableStyle = {
        border: isOver ? '2px dashed #198754' : '',
    };
    return (
        <div
            className="droppable"
            ref={ setNodeRef }
            style={ droppableStyle }>
            <Cell
                cell={ props.cell }
                cellIndex={ props.cellIndex }
                rotateCell={ (e) => {
                    e.preventDefault();
                    props.run.rotateCell(props.cellIndex, false);
                    props.syncRun();
                } }
                rotateCellReverse={ (e) => {
                    e.preventDefault();
                    props.run.rotateCell(props.cellIndex, true);
                    props.syncRun();
                } }
            />
        </div>
    );
}

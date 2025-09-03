import './Cell.css';
import { useDraggable } from '@dnd-kit/core';

export default function Cell(props) {
    if (props.isSource) {
        return (
            <div className="cell cell-source">
                <div className="cell-title">Source</div>
                <div className="cell-ball water water-flow"></div>
                <div className={ "cell-connector water cell-connector-" + props.side }></div>
            </div>
        );
    }
    if (props.isDest) {
        return (
            <div className="cell cell-dest">
                <div className="cell-title">Target</div>
                <div className="cell-ball"></div>
                <div className={ "cell-connector cell-connector-" + props.side }></div>
            </div>
        );
    }
    if (props.cell) {
        const { attributes, listeners, setNodeRef, transform } = useDraggable({
            id: `draggable-${props.cellIndex}`,
        });
        const style = transform ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(0.75)`,
            zIndex: 1000,
            border: '2px dashed #ffc107',
        } : undefined;
        const cellParts = [];
        [
            'topLeft', 'topCenter', 'topRight',
            'middleLeft', 'middleCenter', 'middleRight',
            'bottomLeft', 'bottomCenter', 'bottomRight',
        ].forEach(part => {
            const classNames = ["cell-part"];
            if (props.cell[part].isPipe) {
                classNames.push("cell-pipe");
                if (props.cell.hasWater) {
                    classNames.push('water');
                }
            }
            cellParts.push(
                <div key={part} className={classNames.join(' ')}></div>
            );
        });
        return (
            <div
                ref={ setNodeRef }
                style={ style }
                {...listeners}
                {...attributes}
                className="cell"
                onClick={ props.rotateCell }
                onContextMenu={ props.rotateCellReverse }
            >
                <div className="cell-grid">
                    { cellParts }
                </div>
            </div>
        );
    }
    return (
        <div className="cell cell-empty"></div>
    );
}

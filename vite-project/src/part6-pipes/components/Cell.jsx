import './Cell.css';
import { useDraggable } from '@dnd-kit/core';

export default function Cell(props) {
    if (props.isSource) {
        return (
            <div className="cell cell-source">
                <div className="cell-title">Start</div>
                <div className="cell-ball water water-flow"></div>
                <div className="cell-connector water cell-connector-right"></div>
            </div>
        );
    }
    if (props.isDest) {
        return (
            <div className="cell cell-dest">
                <div className="cell-title">Finish</div>
                <div className="cell-ball"></div>
                <div className="cell-connector cell-connector-left"></div>
            </div>
        );
    }
    if (props.cell) {
        const { attributes, listeners, setNodeRef, transform } = useDraggable({
            id: `draggable-${props.cell.id}`,
        });
        const style = transform ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            zIndex: 1000,
            border: '1px dashed #ffc107',
        } : undefined;
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
                    <div className={ "cell-part cell-top-left" + (props.cell.top_left.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-top-center" + (props.cell.top_center.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-top-right" + (props.cell.top_right.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-middle-left" + (props.cell.middle_left.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-middle-center" + (props.cell.middle_center.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-middle-right" + (props.cell.middle_right.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-bottom-left" + (props.cell.bottom_left.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-bottom-center" + (props.cell.bottom_center.is_pipe ? ' cell-pipe' : '') }></div>
                    <div className={ "cell-part cell-bottom-right" + (props.cell.bottom_right.is_pipe ? ' cell-pipe' : '') }></div>
                </div>
            </div>
        );
    }
    return (
        <div className="cell cell-empty"></div>
    );
}

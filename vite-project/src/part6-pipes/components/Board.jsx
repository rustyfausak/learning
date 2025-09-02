import './Board.css';
import Cell from './Cell.jsx';
import DroppableCell from './DroppableCell.jsx';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

export default function Board(props) {
    const keyboardSensor = useSensor(KeyboardSensor);
    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            distance: 10,
        },
    });
    const sensors = useSensors(pointerSensor, keyboardSensor);

    const cells = [];
    let index = 0;
    for (let y = 0; y < props.run.board.rows; y++) {
        for (let x = 0; x < props.run.board.cols + 2; x++) {
            const key = `cell-${y}-${x}`;
            if (x === 0) {
                cells.push(
                    <Cell
                        key={ key }
                        isSource={ props.run.board.sourceRowIndexes.includes(y) }
                    />
                );
            }
            else if (x === props.run.board.cols + 1) {
                cells.push(
                    <Cell
                        key={ key }
                        isDest={ props.run.board.destRowIndexes.includes(y) }
                    />
                );
            }
            else {
                const cell = props.run.board.cells[index];
                const cellIndex = index;
                cells.push(
                    <DroppableCell
                        key={ key }
                        cell={ cell }
                        cellIndex={ cellIndex }
                        run={ props.run }
                        syncRun={ props.syncRun }
                    />
                );
                index++;
            }
        }
    }
    const boardStyle = {
        gridTemplateColumns: `repeat(${props.run.board.cols + 2}, 1fr)`,
        gridTemplateRows: `repeat(${props.run.board.rows}, 1fr)`,
    };
    return (
        <div className="board">
            <DndContext sensors={sensors}>
                <div className="board-grid" style={ boardStyle }>
                    { cells }
                </div>
            </DndContext>
        </div>
    );
}

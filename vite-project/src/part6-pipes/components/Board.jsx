import './Board.css';
import Cell from './Cell.jsx';

export default function Board(props) {
    const cells = [];
    let index = 0;
    for (let y = 0; y < props.run.board.rows; y++) {
        for (let x = 0; x < props.run.board.cols + 2; x++) {
            const key = `cell-${y}-${x}`;
            if (x === 0) {
                cells.push(
                    <Cell
                        key={ key }
                        is_source={ props.run.board.sourceRowIndexes.includes(y) }
                    />
                );
            }
            else if (x === props.run.board.cols + 1) {
                cells.push(
                    <Cell
                        key={ key }
                        is_dest={ props.run.board.destRowIndexes.includes(y) }
                    />
                );
            }
            else {
                const cell = props.run.board.cells[index];
                const cellIndex = index;
                cells.push(
                    <Cell
                        key={ key }
                        cell={ cell }
                        rotateCell={ (e) => {
                            e.preventDefault();
                            props.run.rotateCell(cellIndex, false);
                            props.syncRun();
                        } }
                        rotateCellReverse={ (e) => {
                            e.preventDefault();
                            props.run.rotateCell(cellIndex, true);
                            props.syncRun();
                        } }
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
            <div className="board-grid" style={ boardStyle }>
                { cells }
            </div>
        </div>
    );
}

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
                        side="left"
                        run={ props.run }
                        isSource={ props.run.board.sourceIndexesLeft.includes(y) }
                        isDest={ props.run.board.destIndexesLeft.includes(y) }
                        isWatered={ props.run.board.wateredIndexesLeft.includes(y) }
                    />
                );
            }
            else if (x === props.run.board.cols + 1) {
                cells.push(
                    <Cell
                        key={ key }
                        side="right"
                        run={ props.run }
                        isSource={ props.run.board.sourceIndexesRight.includes(y) }
                        isDest={ props.run.board.destIndexesRight.includes(y) }
                        isWatered={ props.run.board.wateredIndexesRight.includes(y) }
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
                        cellIndex={ cellIndex }
                        run={ props.run }
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
    };
    return (
        <div className="board">
            <div className="board-grid" style={ boardStyle }>
                { cells }
            </div>
        </div>
    );
}

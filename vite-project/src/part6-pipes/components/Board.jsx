import './Board.css';
import Cell from './Cell.jsx';

export default function Board(props) {
    const cells = [];
    props.run.board.cells.forEach((cell, index) => {
        cells.push(
            <Cell
                key={ index }
                cell={ cell }
            />
        );
    });
    return (
        <div className="board">
            <div className="board-grid">
                { cells }
            </div>
        </div>
    );
}

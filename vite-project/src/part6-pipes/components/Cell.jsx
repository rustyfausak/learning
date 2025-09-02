import './Cell.css';

export default function Cell(props) {
    if (props.is_source) {
        return (
            <div className="cell cell-source">
                <div className="cell-title">Start</div>
                <div className="cell-ball water water-flow"></div>
                <div className="cell-connector water cell-connector-right"></div>
            </div>
        );
    }
    if (props.is_dest) {
        return (
            <div className="cell cell-dest">
                <div className="cell-title">Finish</div>
                <div className="cell-ball"></div>
                <div className="cell-connector cell-connector-left"></div>
            </div>
        );
    }
    if (props.cell) {
        return (
            <div className="cell" onClick={ props.rotateCell } onContextMenu={ props.rotateCellReverse }>
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

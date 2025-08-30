import './Cell.css';

export default function Cell(props) {
    let classNames = ["cell"];
    classNames.push(`cell-rotation-${ props.cell.rotation }`);
    return (
        <div className={ classNames.join(' ') }>
            { props.cell.tile.name }-
            { props.cell.rotation }
        </div>
    );
}

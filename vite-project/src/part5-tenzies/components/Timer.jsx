export default function Timer (props) {
    const seconds = Math.floor((props.time / 1000));
    const milliseconds = Math.floor(props.time % 1000 / 10);
    return (
        <div className="timer">
            {seconds.toString()}.
            {milliseconds.toString().padStart(2, "0")} sec
        </div>
    )
}

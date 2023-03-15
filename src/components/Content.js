const Content = (props) => {
    return (
        <div>
            <p>Part name: {props.partName}</p>
            <p>Number of exercises: {props.exCount}</p>
        </div>
    )
}

export default Content
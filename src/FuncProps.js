function FuncProps(props){
    return(
        <div>
            <h1>from functional components</h1>
            {props.carname} {props.year}
        </div>
    )
}
export default FuncProps
function ClickMe(){
    alert("I was clicked")
}

export default function Clicker(){
    return(
        <>
        <button onClick={ClickMe}></button>
        </>
    );
}
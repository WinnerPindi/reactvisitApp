import "./MainHeader.css"


export function MainHeader(props){
    return(
        <header className="main-header">
            {props.children}
        </header>
    );
}
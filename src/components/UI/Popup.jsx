import "../../styles/UI/Popup.css";
const Popup = (props) => {
    const {children,setShow,layout=undefined} = props;
    return(
        <>
            {children !== undefined?<>
                    <div className={"popup-wrapper"}>
                        <div className="dark_overlay"></div>
                        <div className={layout!==undefined? "popup "+layout.general:"popup popup-generic"}>
                            {children}
                        </div>
                    </div>
                </>:
                <></>
            }
        </>
    )
}
export default Popup;
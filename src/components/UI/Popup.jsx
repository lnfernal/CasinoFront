import "../../styles/Popup.css";
const Popup = (props) => {
    const {children,setShow,layout=undefined} = props;
    return(
        <>
            {children !== undefined?<>
                    <div className={"popup-wrapper"}>
                        <div className="dark_overlay"></div>
                        <div className={layout!==undefined? "popup "+layout.general:"popup popup-generic"}>
                            <div className="flex-row-9">
                                <img
                                    className="x24-29 zoomable"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/61828a5312c01fb2008ac24d/releases/61fa6fa7bc3ab285affda288/img/24@2x.svg"
                                    onClick={()=>{setShow(undefined)}}
                                />
                            </div>
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
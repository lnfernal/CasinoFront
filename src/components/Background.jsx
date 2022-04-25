export default function Background(props) {
    const {children, footer=undefined} = props;
    return (
        <div className="base">
            <div className="container">
                {children}
            </div>
            {footer!==undefined? footer:<></>}
        </div>
    )
}
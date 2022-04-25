export default function Background(props) {
    const {children} = props;
    return (
        <div className="base">
            <div className="container">
                {children}
            </div>
        </div>
    )
}
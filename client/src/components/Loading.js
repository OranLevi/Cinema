const Loading = (props) => {
    return (
        <>
            <div className="text-center py-5 ">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

                <p className={`mt-2  ${props.colorText === "white" && 'text-white'}`}>Loading...</p>
            </div>
        </>
    );
}

export default Loading;
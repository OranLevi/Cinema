const MyDetails = (props) => {

    return (
        <>
            <div className="py-4 ">
                <div className="border py-2 bg-light rounded px-4">
                    <h4>First name:</h4>
                    <h6>{props.userDeatils && props.userDeatils.firstName}</h6>
                </div>
                <div className="border py-2 mt-2 bg-light rounded px-4">
                    <h4>Last name:</h4>
                    <h6>{props.userDeatils && props.userDeatils.lastName}</h6>
                </div>
                <div className="border py-2 mt-2 bg-light rounded px-4">
                    <h4>Email:</h4>
                    <h6>{props.userDeatils && props.userDeatils.email}</h6>
                </div>
            </div>
        </>
    );
}

export default MyDetails;
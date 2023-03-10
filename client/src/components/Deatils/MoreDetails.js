const MoreDetails = (props) => {

    return (
        <div className="">
            <div className="border py-2 bg-light rounded text-center ">
                <h1>More Details</h1>
                <table className="table ">
                    <tbody>
                        <tr>
                            <th scope="row">Release date</th>
                            <td>{typeof props.data.release_date === 'undefined' || props.data.release_date === '' ? "N/A" : props.data.release_date}</td>
                        </tr>
                        <tr>
                            <th scope="row">Status</th>
                            <td>{typeof props.data.status === 'undefined' || props.data.status === '' ? "N/A" : props.data.status}</td>

                        </tr>
                        <tr>
                            <th scope="row">Tagline</th>
                            <td>{typeof props.data.tagline === 'undefined' || props.data.tagline === '' ? "N/A" : props.data.tagline}</td>

                        </tr>
                        <tr>
                            <th scope="row">Budget</th>
                            <td>{typeof props.data.budget === 'undefined' || props.data.budget === '' ? "N/A" : props.data.budget}</td>

                        </tr>
                        <tr>
                            <th scope="row">Original language</th>
                            <td>{typeof props.data.original_language === 'undefined' || props.data.original_language === '' ? "N/A" : props.data.original_language}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MoreDetails;
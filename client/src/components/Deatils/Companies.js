const Companies = (props) => {

    return (
        <div className="py-5">
            <div className="border py-2 bg-light rounded text-center ">
                <h1>Production Companies</h1>
                {props.data.production_companies && props.data.production_companies.length > 0 ? (
                    <div className="scrolling-wrapper row flex-row flex-nowrap pb-4 pt-2 px-2">
                        {props.data.production_companies.map((company, index) => (
                            <div key={index} className="col-lg-2 col-sm-4 col-xs-4 col-4">
                                <div className="card card-production-companies">
                                    <img
                                        src={
                                            company.logo_path === null
                                                ? "/image/imageUnavailable.png"
                                                : `https://image.tmdb.org/t/p/w500/${company.logo_path}`
                                        }
                                        className="card-production-companies-img"
                                        alt="company logo"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{company.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 className="py-5">No production companies found.</h3>
                )}
            </div>
        </div>

    );
}

export default Companies;


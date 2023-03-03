import CardsCategory from "../components/CardsCategory";
import FilterData from "../components/FilterData";

const PagesCategory = (props) => {

    return (
        <>
            <div className="container text-center mt-5">
                <div className="border py-5 bg-light rounded">

                    <h2>{props.pageName}</h2>
                    <FilterData />
                </div>

                {props.pageName === "Popular Movies" && <CardsCategory mediaType="movie" category="populer" />}
                {props.pageName === "Top rated Movies" && <CardsCategory mediaType="movie" category="toprated" />}
                {props.pageName === "Upcoming Movies" && <CardsCategory mediaType="movie" category="upcoming" />}
                {props.pageName === "Popular Tv Shows" && <CardsCategory mediaType="tv" category="populer" />}
                {props.pageName === "Top rated Tv Shows" && <CardsCategory mediaType="tv" category="toprated" />}

            </div>


        </>
    );
}

export default PagesCategory;
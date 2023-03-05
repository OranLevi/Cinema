import { useState } from "react";
import CardsCategory from "../components/CardsCategory";
import FilterData from "../components/FilterData";

const PagesCategory = (props) => {

    const [filterSortBy, setFilterSortBy] = useState("");

    return (
        <>
            <div className="container text-center mt-5">
                <div className="border py-5 bg-light rounded">

                    <h2>{props.pageName}</h2>

                    {props.pageName === "Popular Movies" && <FilterData setFilterSortBy={setFilterSortBy} mediaType="movie" />}
                    {props.pageName === "Top rated Movies" && <FilterData setFilterSortBy={setFilterSortBy} mediaType="movie" />}
                    {props.pageName === "Upcoming Movies" && <FilterData setFilterSortBy={setFilterSortBy} mediaType="movie" />}
                    {props.pageName === "Popular Tv Shows" && <FilterData setFilterSortBy={setFilterSortBy} mediaType="tv" />}
                    {props.pageName === "Top rated Tv Shows" && <FilterData setFilterSortBy={setFilterSortBy} mediaType="tv" />}

                </div>

                {props.pageName === "Popular Movies" && <CardsCategory mediaType="movie" category="populer" sortBy={filterSortBy} />}
                {props.pageName === "Top rated Movies" && <CardsCategory mediaType="movie" category="toprated" sortBy={filterSortBy} />}
                {props.pageName === "Upcoming Movies" && <CardsCategory mediaType="movie" category="upcoming" sortBy={filterSortBy} />}
                {props.pageName === "Popular Tv Shows" && <CardsCategory mediaType="tv" category="populer" sortBy={filterSortBy} />}
                {props.pageName === "Top rated Tv Shows" && <CardsCategory mediaType="tv" category="toprated" sortBy={filterSortBy} />}

            </div>


        </>
    );
}

export default PagesCategory;
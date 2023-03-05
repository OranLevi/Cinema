import { useState } from "react";

const FilterData = (props) => {

	const [selectedFilerSortBy, setSelectdFilterSortBy] = useState(("Sort By"));

	const handleFilterSortBy = (event) => {
		event.preventDefault();
		setSelectdFilterSortBy(event.target.textContent)
		props.setFilterSortBy(event.target.textContent);
	};

	return (
		<>

			<div className="btn-group mt-2">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					{selectedFilerSortBy}
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" onClick={handleFilterSortBy}>
					<li><a className="dropdown-item" href="/#">Title (A-Z)</a></li>
					<li><a className="dropdown-item" href="/#">Title (Z-A)</a></li>
					<li><a className="dropdown-item" href="/#">Release Date new to old</a></li>
					<li><a className="dropdown-item" href="/#">Release Date old to new</a></li>
					<li><a className="dropdown-item" href="/#">Rating High to Low</a></li>
					<li><a className="dropdown-item" href="/#">Rating Low to High</a></li>

				</ul>
			</div>

		</>
	);
}

export default FilterData;
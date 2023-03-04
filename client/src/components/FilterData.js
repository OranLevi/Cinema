const FilterData = () => {

	return (
		<>

			<div className="btn-group mt-2">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Sort By
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li><a className="dropdown-item" href="/#">Title (A-Z)</a></li>
					<li><a className="dropdown-item" href="/#">Title (Z-A)</a></li>
					<li><a className="dropdown-item" href="/#">Release Date new to old</a></li>
					<li><a className="dropdown-item" href="/#">Release Date old to new</a></li>
					<li><a className="dropdown-item" href="/#">Rating High to Low</a></li>
					<li><a className="dropdown-item" href="/#">Rating Low to High</a></li>

				</ul>
			</div>

			<div className="btn-group mx-2 mt-2">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Genres
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li><a className="dropdown-item" href="/#">Action</a></li>
					<li><a className="dropdown-item" href="/#">Another action</a></li>
					<li><a className="dropdown-item" href="/#">Something else here</a></li>
				</ul>
			</div>

		</>
	);
}

export default FilterData;
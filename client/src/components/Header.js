const Header = () => {
    return (
        <header className="bg-black">
              <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
              
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://image.tmdb.org/t/p/original//v2LilmCylr3bL9TCZSj6syjowZh.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Name Movie</h5>
                            <p>Mike Lane takes to the stage again after a lengthy hiatus, following a business deal that went bust, leaving him broke and taking bartender gigs in Florida. For what he hopes will be one last hurrah, Mike heads to London with a wealthy socialite who lures him with an offer he can’t refuse… and an agenda all her own. With everything on the line, once Mike discovers what she truly has in mind, will he—and the roster of hot new dancers he’ll have to whip into shape—be able to pull it off?</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://image.tmdb.org/t/p/original//9ijMGlJKqcslswWUzTEwScm82Gs.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Name Movie 2</h5>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://image.tmdb.org/t/p/original//6VX3TrYBtnMOHp3v44lIWWnEp7N.jpg" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Name Movie 3</h5>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                </a>
            </div>
            </div>
        </header>
    );
}

export default Header;
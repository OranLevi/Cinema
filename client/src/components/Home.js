import Card from "./Card";
import Header from "./Header";

const Home = () => {
    return (
        <>
            <Header />
            <Card cardName="Trending" subtitle="Tending all Movies and tv" />
            <Card cardName="Populer" subtitle="Populer all Movies and tv" />
            <Card cardName="Top Rated" subtitle="Toprated all Movies and tv" />
            <Card cardName="Upcoming" subtitle="upcoming all Movies and tv" />
        </>

    );
}

export default Home;
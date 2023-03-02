import Card from "./Card";
import Header from "./Header";

const Home = () => {

    return (
        <>
            <Header />
            <Card cardName="Trending" category="trending" subtitle="Stay up-to-date with the latest trends in entertainment and discover the most talked-about movies and TV shows of the week." />
            <Card cardName="Populer" category="populer" subtitle="Discover the most popular movies and TV shows of the moment with our selection of titles that everyone is talking about." />
            <Card cardName="Top Rated" category="toprated" subtitle="Discover the highest-rated movies and TV shows of all time, as voted by audiences and critics alike" />
            <Card cardName="Upcoming" category="upcoming" subtitle="Stay up-to-date with the latest upcoming movies, and be the first to know about their release dates." />
        </>

    );
}

export default Home;
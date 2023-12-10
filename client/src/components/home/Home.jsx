import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../public/styles/30_pages/home.css";

import * as storyService from "../../services/storyService";
import LatestStories from "./latest-stories/LatestStories";

export default function Home({ _id, accessToken, email }) {
  const [latestStories, setLatestStories] = useState([]);

  useEffect(() => {
    storyService.getLatest().then((result) => setLatestStories(result));
  }, []);
  return (
    <div className="home">
      <header className="home">
        <h1>Welcome to Creepy Pasta Stories</h1>
        <h2>Explore the world of chilling tales...</h2>
      </header>

      <section className="latest-stories">
        <h2>Latest Stories</h2>

        {latestStories.map((story) => (
          <LatestStories {...story} />
        ))}

        {!latestStories.length && (
          <p>There is no stories yet write the first</p>
        )}
      </section>

      <section className="horror-authors">
        <h2>Horror Authors</h2>
        <h3>
          Authors who inspire us and from whom we can always draw ideas for our
          creations.
        </h3>
        <ul>
          <li>
            <img src="https://i.pinimg.com/236x/e8/81/4d/e8814d809c4b30bb94d5dd860611831e.jpg" />
            <h3>H. P. Lovecraft</h3>
            <Link to={"https://en.wikipedia.org/wiki/H._P._Lovecraft"}>
              <button>Details</button>
            </Link>
          </li>
          <li>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNzI1NzA2MGItYzcxOS00ZThiLTgwYWMtN2ZjMmZjZDlmZWFiXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_.jpg"
              alt="Author B"
            />
            <h3>Stephen King</h3>
            <Link to={"https://en.wikipedia.org/wiki/Stephen_King"}>
              <button>Details</button>
            </Link>
          </li>
          <li>
            <img
              src="https://i.pinimg.com/736x/8e/b0/15/8eb0158c63ac3a5e231947480b1f4698.jpg"
              alt="Author C"
            />
            <h3>Edgar Allan Poe</h3>
            <Link to={"https://en.wikipedia.org/wiki/Edgar_Allan_Poe"}>
              <button>Details</button>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

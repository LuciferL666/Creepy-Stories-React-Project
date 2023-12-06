import '../../public/styles/30_pages/home.css'

export default function Home () {
    return (
    <div className="home">
      <header className="home">
        <h1>Welcome to Creepy Pasta Stories</h1>
        <h2>Explore the world of chilling tales...</h2>
      </header>

      <section className="latest-stories">
        <h2>Latest Stories</h2>
        <ul>
          <li>
          <img src="https://m.media-amazon.com/images/M/MV5BOWI4NzNkMDctYmRjNS00ZjdhLWJkOGMtMjJjYWQxNDNiNDRlXkEyXkFqcGdeQXVyMTM0ODk0NzUy._V1_FMjpg_UX1000_.jpg" alt="Story 1" />
            <h3>Story 1</h3>
            <p>By: Author 1</p>
            <p>Description of Story 1...</p>
            <button>Details</button>
          </li>
          <li>
          <img src="data:image/jpeg;base64,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" alt="Story 1" />
            <h3>Story 2</h3>
            <p>By: Author 2</p>
            <p>Description of Story 2...</p>
            <button>Details</button>
          </li>
          <li>
            <img src="https://www.br.de/puls/jeff-the-killer-102~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg?version=a0808" alt="Story 3" />
            <h3>Story 3</h3>
            <p>By: Author 3</p>
            <p>Description of Story 3...</p>
            <button>Details</button>
          </li>
        </ul>
      </section>

      <section className="horror-authors">
        <h2>Horror Authors</h2>
        <ul>
          <li>
            <img src="https://m.media-amazon.com/images/M/MV5BNzI1NzA2MGItYzcxOS00ZThiLTgwYWMtN2ZjMmZjZDlmZWFiXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_.jpg" alt="Author A" />
            <h3>Author A</h3>
            <button>Details</button>
          </li>
          <li>
            <img src="https://m.media-amazon.com/images/M/MV5BNzI1NzA2MGItYzcxOS00ZThiLTgwYWMtN2ZjMmZjZDlmZWFiXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_.jpg" alt="Author B" />
            <h3>Author B</h3>
            <button>Details</button>
          </li>
          <li>
            <img src="https://media.thenerdstash.com/wp-content/uploads/2022/06/Stephen-King-His-10-Bestselling-Novels.jpg" alt="Author C" />
            <h3>Author C</h3>
            <button>Details</button>
          </li>
        </ul>
      </section>
    </div>
  );
};

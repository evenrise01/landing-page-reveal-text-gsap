export default function Home() {
  return (
    <>
      <div className="preloader">
        <div className="intro-title">
          <h1>Evenrise Studios</h1>
        </div>
        <div className="outro-title">
          <h1>10</h1>
        </div>
      </div>
      <div className="split-overlay">
        <div className="intro-title">
          <h1>Evenrise Studios</h1>
        </div>
        <div className="outro-title">
          <h1>10</h1>
        </div>
      </div>

      <div className="tags-overlay">
        <div className="tag tag-1">
          <p>Design in Balance</p>
        </div>
        <div className="tag tag-2">
          <p>The Poetry of Progress</p>
        </div>
        <div className="tag tag-3">
          <p>Timeless Design</p>
        </div>
      </div>

      <div className="container">
        <nav>
          <p id = "logo">K10</p>
          <p>Menu</p>
        </nav>

        <div className="hero-img">
          <img src="/hero-img.jpg" alt="Hero image" />
        </div>

        <div className="card">Kumo Studios</div>

        <footer>
          <p>Scroll Down</p>
          <p>Made by Evenrise</p>
        </footer>
      </div>
    </>
  );
}

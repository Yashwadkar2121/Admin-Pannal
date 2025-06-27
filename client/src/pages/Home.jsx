import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World’s Best IT Company</p>
              <h1>Welcome to Pannal Technologies</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Pannal
                Technologies, we specialize in providing innovative IT services
                and solutions tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="IT Solutions Illustration"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Analytics Section */}
      <Analytics />

      {/* Call to Action Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* image */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="Digital Transformation"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let’s discuss how Pannal Technologies can help your business
              thrive in the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

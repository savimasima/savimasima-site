const AboutSection = () => {
  return (
    <section className="about" id="about" data-testid="about-section">
      <div className="about-container">
        <div className="about-image" data-testid="about-image">
          <img
            src="https://images.pexels.com/photos/17052896/pexels-photo-17052896.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Studio workspace with warm lighting"
            className="fade-in-left"
          />
        </div>
        <div className="about-text fade-in-right" data-testid="about-text">
          <h2>About Savimasima</h2>
          <p className="about-paragraph">
            I'm Maria Surskova, a Belfast-based Front-End Developer running Savimasima — a lean web-engineering studio focused on fast, accessible, and maintainable builds.
          </p>
          <p className="about-paragraph">
            I work with React, Next.js, and Webflow to turn real designs into production-ready websites and features — clean structure, high performance, and sensible architecture first.
          </p>
          <p className="about-paragraph">
            From CMS sites to Stripe integrations and OpenAI-powered components, I deliver stable, documented builds that teams can grow.
          </p>
          <p className="about-facts">
            Stack: React · TypeScript · Next.js · Webflow&nbsp; • &nbsp;Focus: performance &amp; accessibility&nbsp; • &nbsp;Regions: UK/EU/US
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
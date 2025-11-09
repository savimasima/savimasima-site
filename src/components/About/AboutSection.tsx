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
            I’m Maria Surskova, a Belfast-based Front-End Developer running Savimasima — Front-End &amp; Webflow Studio. I build
            fast, accessible, and maintainable web experiences using React, TypeScript, Next.js, and Webflow.
          </p>
          <p className="about-paragraph">
            I care about clean structure, Core Web Vitals, and sensible architecture. From CMS sites to Stripe subscriptions and
            OpenAI integrations, I ship stable, documented features teams can grow. Available for hourly development and
            fixed-from projects across the UK/EU/US.
          </p>
          <p className="about-facts">
            Stack: React · TypeScript · Next.js · Webflow&nbsp; • &nbsp;Focus: performance &amp; accessibility&nbsp; • &nbsp;Regions:
            UK/EU/US
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

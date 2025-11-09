import { FormEvent } from 'react';

const ContactSection = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    event.currentTarget.reset();
  };

  return (
    <section className="contact" id="contact" data-testid="contact-section">
      <div className="contact-container">
        <h2 className="section-title" data-testid="contact-title">
          Let's Create Together
        </h2>
        <p className="contact-subtitle">
          Tell us about your project and we'll get back to you within 24 hours
        </p>
        <form className="contact-form" data-testid="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="sr-only" htmlFor="name">
                Your Name
              </label>
              <input type="text" id="name" placeholder="Your Name" required data-testid="contact-name" />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                data-testid="contact-email"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="subject">
              Subject
            </label>
            <input type="text" id="subject" placeholder="Subject" required data-testid="contact-subject" />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell us about your project..."
              required
              data-testid="contact-message"
            />
          </div>
          <button type="submit" className="btn-primary" data-testid="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

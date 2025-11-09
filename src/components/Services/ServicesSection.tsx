import { Code2, HeartHandshake, Layout } from 'lucide-react';
import type { FC, ReactElement } from 'react';

interface ServiceItem {
  icon: ReactElement;
  title: string;
  description: string;
  testId: string;
}

const services: ServiceItem[] = [
  {
    icon: <Layout aria-hidden="true" />,
    title: 'Webflow Development',
    description:
      'Custom Webflow websites designed and developed with precision. From concept to launch, we create responsive, high-performance sites that captivate.',
    testId: 'service-webflow',
  },
  {
    icon: <Code2 aria-hidden="true" />,
    title: 'Code Integration',
    description:
      'Seamless custom code integration for advanced functionality. We bring your unique features to life with clean, maintainable code.',
    testId: 'service-code',
  },
  {
    icon: <HeartHandshake aria-hidden="true" />,
    title: 'Monthly Support',
    description:
      'Ongoing care and maintenance for your digital presence. We ensure your website stays fresh, secure, and perfectly optimized.',
    testId: 'service-support',
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="services" id="services" data-testid="services-section">
      <div className="services-container">
        <h2 className="section-title" data-testid="services-title">
          What We Do
        </h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" data-testid={service.testId} key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

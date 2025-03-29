import Head from "next/head";
import "../website.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Nexus Space</title>
        <meta
          name="description"
          content="Learn more about Nexus Space, a real estate company dedicated to transforming property transactions with integrity and innovation."
        />
      </Head>
      <section id="about" className="py-12 bg-gray-100">
        <div className="container container-fluid mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="about-heading text-3xl font-bold text-gray-800">
              About Us
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="about-content text-gray-700">
              At <strong>Nexus Space</strong>, we are more than just a real
              estate company—we are a team dedicated to transforming the way
              people buy, sell, and invest in properties. With a deep
              understanding of the market and a commitment to excellence, we
              provide tailored real estate solutions that cater to every
              client’s unique needs. Whether you are looking for a new home, a
              commercial space, or a lucrative investment opportunity, our
              expertise ensures a seamless and rewarding experience.
            </p>
            <p className="text-gray-700">
              Backed by integrity, innovation, and a passion for real estate,
              Nexus Space strives to create lasting value for our clients by
              connecting them with the best properties in prime locations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

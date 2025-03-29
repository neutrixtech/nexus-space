import Head from "next/head";
import "../website.css";

const Services = () => {
  const servicesContent = [
    {
      id: "1",
      description:
        "Explore prime Land opportunities, ideal for investment, development, or future growth potential.",
      title: "Land",
      img: "https://www.shutterstock.com/image-photo/city-buildings-skyline-asphalt-road-600nw-2358658057.jpg",
    },
    {
      id: "2",
      description:
        "Discover a variety of Commercial properties, designed to support businesses seeking success and expansion.",
      title: "Commercial",
      img: "https://img.freepik.com/free-photo/view-city-square_1359-45.jpg?t=st=1743134309~exp=1743137909~hmac=0f11155dc8af32e5fa75223560275a19ba3a07dc6854dedd1dc7e2e0782164b7&w=900",
    },
    {
      id: "3",
      description:
        "Find the perfect Residential property, whether for sale or rent, catering to all your lifestyle preferences.",
      title: "Residential",
      img: "https://img.freepik.com/premium-photo/modern-apartment-building-dusk_204719-73416.jpg?w=826",
    },
    {
      id: "4",
      description:
        "Browse our comprehensive selection of properties for Sale, offering options for every buyer and investor.",
      title: "Sale",
      img: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1743132476~exp=1743136076~hmac=97bef5d27e95db3897d1c762035784545abb2bd98e3057876c6b34220f585dc1&w=996",
    },
    {
      id: "5",
      description:
        "Explore flexible rental options for both Residential and Commercial spaces, tailored to suit your needs.",
      title: "Rent",
      img: "https://img.freepik.com/premium-photo/house-rent-white-plate-with-inscription-announcement-rooms-rent-resort-caribbean-coast_431724-1127.jpg?w=996",
    },
  ];

  return (
    <>
      <Head>
        <title>Services - Nexus Space</title>
        <meta
          name="description"
          content="Learn more about Nexus Space, a real estate company dedicated to transforming property transactions with integrity and innovation."
        />
      </Head>
      <section id="services" className="py-12 bg-gray-100">
        <div className="container container-fluid mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="about-heading text-3xl font-bold text-gray-800">
              Services
            </h2>
          </div>
          {/* <div className="cards-wrapper max-w-3xl mx-auto text-center">
            {servicesContent.map((service) => (
              <div
                key={service.id}
                className="card bg-white shadow-md rounded-lg p-6 w-64 hover:scale-105 transition-all"
              >
                <img src={service.img} alt={service.title} />
                <div className="service-content">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="cards-wrapper max-w-3xl mx-auto text-center">
            {servicesContent.map((service) => (
              <div
                key={service.id}
                className="card shadow-md rounded-lg p-6 w-64 hover:scale-105 transition-all overlay"
                style={{ backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="service-content">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;

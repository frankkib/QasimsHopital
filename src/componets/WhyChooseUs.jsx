import bodyImage from '../assets/best.jpg';
import labTest from '../assets/laboratory.jpg';

const WhyChooseUs = () => {
  return (
    <>
      <div className="mt-10 p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={bodyImage}
            alt="Body"
            className="h-48 w-48 md:h-96 md:w-96 rounded-lg"
          />
          <p className="text-gray-700 text-lg text-center md:text-left md:w-1/2">
            At Qasims Hospital, we pride ourselves on delivering top-notch
            medical services through a dedicated team of experienced
            professionals. Our staff is committed to providing compassionate
            care tailored to your individual needs. With a focus on
            patient-centered treatment, we ensure that every aspect of your
            experience is positive and supportive. Our state-of-the-art
            facilities are equipped with the latest technology, enabling us to
            offer the best possible care. We understand that your health and
            well-being are paramount, and we strive to create an environment
            where you feel safe and valued. At Qasims Hospital, your health is
            our priority, and we are here to support you every step of the way.
          </p>
          <img
            src={labTest}
            alt="Lab Test"
            className="h-48 w-48 md:h-96 md:w-96 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
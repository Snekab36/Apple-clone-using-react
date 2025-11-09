const Section = ({ title, subtitle, image, bgColor, textColor }) => {
  return (
    <section className={`${bgColor} ${textColor} text-center py-16`}>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-lg mt-3">{subtitle}</p>
      <img src={image} alt={title} className="mx-auto mt-8" />
    </section>
  );
};

export default Section;

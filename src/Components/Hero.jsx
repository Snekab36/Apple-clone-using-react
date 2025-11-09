import Button from "./Button";
const Hero = () => {
  return (
    <section className="text-center bg-black text-white py-20">
      <h1 className="text-5xl font-semibold">iPhone 17 Pro</h1>
      <p className="text-xl mt-3">Titanium. So strong. So light. So Pro.</p>
      <div className="flex justify-center gap-6 mt-6">
         <Button text="Learn more" variant="primary" />
        <Button text="Buy" variant="secondary" />
      </div>
      <img src="/pic-1.jpg" alt="iPhone" className="mx-auto mt-10" />
    </section>
  );
};
export default Hero;

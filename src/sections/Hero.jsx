import BlinkCharacter from "../components/BlinkCharacter";
import HeroText from "../components/HeroText";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
    <HeroText />
    {/* <div className="flex justify-center mt-10 md:hidden">
        <div className="h-[280px] w-[150px]  opacity-90">
            <BlinkCharacter />
        </div>
    </div> */}

   
</section>
  );
};

export default Hero;
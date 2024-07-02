import ghandiImage from "../../assets/ghandi.svg";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="sm:flex justify-between items-center mb-10">
      <div className="w-3/5 sm:flex flex-col hidden">
        <div className="flex items-start">
          <span className="md:text-[40px] text-[28px]">1869</span>
        </div>
        <div className="flex items-start">
          <p className="lg:text-8xl md:text-6xl text-5xl">MAHATMA</p>
        </div>
        <div className="flex justify-end">
          <p className="lg:text-8xl md:text-6xl text-5xl mt-4">GHADI</p>
        </div>
        <div className="flex justify-end items-end">
          <span className="md:text-[40px] text-[28px]">1948</span>
        </div>
      </div>
      <div className="sm:hidden flex items-start">
        <span className="text-[28px]">1869</span>
      </div>
      <div className="sm:2/5 full">
        <img
          src={ghandiImage}
          alt="Ghandi"
          className="md:max-w-[470px] md:max-h-[580px] w-full rounded relative"
        />
        <div className="sm:hidden absolute top-1/2 right-1/4">
          <div className="flex items-end">
            <p className="text-4xl">MAHATMA</p>
          </div>
          <div className="flex justify-end">
            <p className="text-4xl">GHANDI</p>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex justify-end items-end">
        <span className="text-[28px]">1948</span>
      </div>
    </div>
  );
}

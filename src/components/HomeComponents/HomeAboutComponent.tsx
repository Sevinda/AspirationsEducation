import GradientBtn from "./GradientBtn";

const HomeAboutComponent = () => {
  return (
    <div className="px-[75px] mt-[110px] flex">
      <img
        src="/images/StudyingBoy.svg"
        alt="Studying Boy"
        className="ml-[85px]"
      />
      <div className="ml-[127px] flex flex-col gap-[75px]">
        <h2 className="text-[48px] font-bold">Study Abroad</h2>
        <p>
          Aspirations Education provides a vast range of programmes from over
          200+ universities across 13+ destinations around the world. Select
          your study program from a great range of choices and let our capable
          team take you to the next level.
        </p>
        <GradientBtn topic="All Countries" buttonWidth="w-[200px]" />
      </div>
    </div>
  );
};

export default HomeAboutComponent;

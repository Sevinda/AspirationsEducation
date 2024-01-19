import "../index.css";
import SmallNumberCard from "./SmallNumberCard";

const BackgroundCardSection = () => {
  return (
    <div className="bg-cover mt-[110px] h-[455px] flower_image flex items-center justify-center gap-[100px] pt-[50px]">
      <SmallNumberCard numberText="100%" stringText="Free of charge" />
      <SmallNumberCard numberText="99%" stringText="VISA Success Rate" />
      <SmallNumberCard numberText="5000" stringText="Students Enrolled" />
      <SmallNumberCard numberText="+20" stringText="Years of Experience" />
    </div>
  );
};

export default BackgroundCardSection;

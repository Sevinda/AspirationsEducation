import HotCourseCard from "./HotCourseCard";

const HotCourseComponent = () => {
  return (
    <div className="mt-[260px] text-center">
      <h2 className="text-[48px] font-bold">Hot Course</h2>
      <p className="mt-[70px] w-[669px] my-0 mx-auto">
        Here are few popular and in demand programs at the moment. Feel free to
        contact us to select the best options for you.
      </p>
      <div className="flex items-center justify-center mt-[205px] gap-[30px]">
        <HotCourseCard image="/images/Medicine.svg" text="Medicine" />
        <HotCourseCard image="/images/Engineering.svg" text="Engineering" />
        <HotCourseCard image="/images/ComputerScience.svg" text="Computer Science" />
        <HotCourseCard image="/images/Business.svg" text="Business Management" />
      </div>
    </div>
  );
};

export default HotCourseComponent;

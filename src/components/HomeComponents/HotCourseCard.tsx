import "../../index.css";

interface Props {
  image: string;
  text: string;
}

const HotCourseCard = ({ image, text }: Props) => {
  return (
    // <div className="w-[300px] h-[372px] small-card-gradient border border-[#FBD21F] rounded-[20px] relative flex justify-center">
    //   <img
    //     src={image}
    //     alt={text}
    //     className="absolute h-[288px] top-[-60px]"
    //   />
    //   <p className="pt-[293px]">{text}</p>
    // </div>
    <div className="w-[300px] h-[372px] small-card-gradient border border-[#FBD21F] rounded-[20px] relative flex justify-center hover-card">
      <img
        src={image}
        alt={text}
        className="absolute h-[288px] top-[-60px] transition-transform duration-300 transform"
      />
      <p className="pt-[293px] duration-300 transition-font">{text}</p>
    </div>
  );
};

export default HotCourseCard;

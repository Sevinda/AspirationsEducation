import "../../index.css";

interface Props {
  topic: string;
  buttonWidth?: string;
}

const GradientBtn = ({ topic, buttonWidth }: Props) => {
  return (
    <button className={`transition duration-300 flex items-center justify-center px-[38px] h-[60px] rounded-[16px] text-[20px] button_gradient ${buttonWidth}`}>
      {topic}
    </button>
  );
};

export default GradientBtn;

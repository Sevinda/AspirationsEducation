import "../index.css";

interface Props {
  numberText: string;
  stringText: string;
}

const SmallNumberCard = ({ numberText, stringText }: Props) => {
  return (
    <div className="flex items-center flex-col h-[260px] w-[240px] rounded-[15px] small-card-gradient border border-[#FBD21F]">
      <p className="h-[100px] w-[100px] flex items-center justify-center bg-white rounded-full mt-[35px] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] p-4 text-[32px]">
        {numberText}
      </p>
      <p className="mt-[44px] text-[24px]">{stringText}</p>
    </div>
  );
};

export default SmallNumberCard;

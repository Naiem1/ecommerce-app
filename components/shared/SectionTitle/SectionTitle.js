const SectionTitle = ({text1, text2}) => {
  return (
    <div>
      <h4 className="text-3xl ">
        <span className="font-bold text-blue-500">{text1} </span>
        <span className="">{ text2}</span>
      </h4>
    </div>
  );
};

export default SectionTitle;

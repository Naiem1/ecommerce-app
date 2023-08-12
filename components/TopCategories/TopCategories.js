import { BsCamera, BsHeadphones } from 'react-icons/bs';
import { FiSpeaker } from 'react-icons/fi';
import { ImMobile } from 'react-icons/im';
import { MdComputer } from 'react-icons/md';

const categoriesIcon = [
  {
    id: 1,
    icon: <ImMobile />,
    text: 'Mobile',
  },
  {
    id: 2,
    icon: <MdComputer />,
    text: 'Computer',
  },
  {
    id: 3,
    icon: <BsHeadphones />,
    text: 'Headphone',
  },
  {
    id: 4,
    icon: <BsCamera />,
    text: 'Camera',
  },
  {
    id: 5,
    icon: <FiSpeaker />,
    text: 'Speaker',
  },
];

const TopCategories = () => {
  return (
    <section className="top-categories">
      <div>
        <h4 className="text-3xl ">
          <span className="font-bold text-blue-500">Top </span>
          <span className="">Categories</span>
        </h4>
      </div>

      <div className="my-16 flex-around text-center">
        {categoriesIcon.map((category) => (
          <div key={category.id} className="category-icon">
            <div className="text-9xl">{category.icon}</div>
            <p>{category.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TopCategories;

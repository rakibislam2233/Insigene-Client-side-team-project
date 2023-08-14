import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const SubFaq = ({data}) => {
    const [open, setOpen] = useState(true);
    return (
        <div
        onClick={() => setOpen(!open)}
        className="w- full collapse rounded-none border py-2"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title px-3">
          <div className="flex justify-between gap-5">
            <h3 className="text-2xl font-semibold">{data.title}</h3>
            <button className=" w-6 h-6 bg-gray-100 flex justify-center items-center rounded-full text-black">
              {open ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
            </button>
          </div>
        </div>
        <div className="collapse-content">
          <p className="text-xl ">{data.description}</p>
        </div>
      </div>
    );
};

export default SubFaq;
import axios from "axios";
import { useEffect, useState } from "react";
import SubExpert from "./SubExpert";

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://insigene-server-side.vercel.app/aboutUsData`)
      .then((res) => {
        setExperts(res.data);
      });
  }, []);
  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-semibold">
        The team of experts behind INSiGENe
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-16 p-5">
        {experts.map((expert, i) => <SubExpert key={i+1} expert={expert}></SubExpert> )}
      </div>
    </div>
  );
};

export default Experts;

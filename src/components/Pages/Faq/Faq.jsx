
import { Helmet } from "react-helmet";
import SubFaq from "./SubFaq";
const FAQ = [
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
];
const Faq = () => {
  
  return (
    <div className="w-full  max-w-6xl mx-auto p-10">
      <Helmet>
        <title>FAQ - INSiGENe</title>
      </Helmet>
      <div className="py-10">
        <h3 className="text-3xl font-bold py-8 ">
          Frequently Asked Questions:
        </h3>
        <div className="space-y-7">
          {FAQ.map((data, i) => <SubFaq key={i+1} data={data} ></SubFaq> )}
        </div>
      </div>
    </div>
  );
};

export default Faq;

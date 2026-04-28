import Slider from "./components/slider";
import Card from "./components/card";

export default function Home() {
  const cardViewData = [
    {
      title: "Inquiry for Frenchaicies",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      link: "Read More",
    },
    {
      title: "Request Pre-Demo",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      link: "Read More",
    },
    {
      title: "Upcoming Events",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      link: "Read More",
    },
  ];
  return (
    <>
      <Slider />
      <div className="m-5">
  <div className="flex flex-wrap justify-center items-center gap-6">
    {cardViewData.map((cardData, index) => {
      return (
        <div key={index} className='shrink-0'>
          <Card title={cardData.title} description={cardData.description} link={cardData.link} />
        </div>
      );
    })}
  </div>
</div>
    </>
  );
}

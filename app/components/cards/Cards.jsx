import Card from "./Card";

const Cards = () => {
  return (
    <section className="w-full py-9">
      <div className="container">
        <h1 className="text-[64px] font-bold mb-5 text-center">Title 1</h1>
        <div className="cards_holder grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card cardNumber={"01"} />
          <Card cardNumber={"02"} />
          <Card cardNumber={"03"} />
        </div>
      </div>
    </section>
  );
};

export default Cards;

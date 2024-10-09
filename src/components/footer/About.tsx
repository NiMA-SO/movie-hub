import SocialsButtons from "./SocialsButtons";

const About = () => {
  return (
    <>
      <h2 className="dark:text-white text-[25px]">About us :</h2>
      <p className="dark:text-white mt-2 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
        perferendis ipsa sapiente, quasi aliquid recusandae architecto maiores
        tempore laborum provident necessitatibus accusamus ducimus laudantium
        veritatis nemo non eos eligendi dolorum. Dignissimos natus dolores
        laborum in optio omnis laudantium odit, obcaecati ex praesentium odio
        consequuntur magnam soluta similique ipsam veritatis. Necessitatibus
        rerum nobis soluta hic deserunt laudantium neque numquam quia culpa.
      </p>
      <div className="flex flex-wrap justify-around items-center w-[80%] mt-5 gap-4 border border-[#ff3b30] dark:border-[#ffd580] rounded-lg px-3 pt-4 pb-2">
        <SocialsButtons />
      </div>
    </>
  );
};

export default About;

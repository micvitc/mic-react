import "./Home.css";
import cardMoviesCode from "./ui/homeCardsCode.jpeg";
import cardMoviesResult from "./ui/homeCardsResult.jpeg";
import homeCardsArrow from "./ui/homeCardsArrow.png";
const Home = () => {
  return (
    <div className="home-background">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_500px] lg:grid-cols-[1fr_1fr_1fr_700px] gap-10 items-center   w-100 h-screen ">
        <div className="flex flex-col h-34 w-145 m-auto  text-center md:text-left md:p-[10%] md:col-span-2 lg:col-span-3">
          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold ">
            <h1>Together We Learn</h1>
            <h1>Together We Grow</h1>
          </div>
          <p className="py-10">
            Engaging with the student community in innovative ways !
          </p>
          <div className="flex items-center justify-center md:block">
            <button
              onClick={{}}
              className="bg-black w-[140px] text-white rounded-sm p-[10px] "
            >
              About Us
            </button>
          </div>
        </div>
        <div className=" flex relative  items-center  ">
          <div className="w-1/2 ml-40 md:ml-10 lg:ml-[50px] shadow-[0_4px_4px_rgba(35, 40, 105, 0.08)] ">
            <img
              src={cardMoviesCode}
              alt="Hero cards for home page code "
              className=""
            />
          </div>
          <div className="absolute top-20 right-10 md:top-[10%] md:right-10  lg:right-20 lg:top-[20%]">
            <img
              src={homeCardsArrow}
              alt="Hero cards for home page arrow"
              className="md:w-9/12 lg:w-12/12"
            />
          </div>
          <div className=" absolute top-[250px] right-[100px] md:top-40 md:right-40 lg:top-[250px] right-[200px] z-10 w-1/2 ">
            <img src={cardMoviesResult} alt="Hero cards for home page result" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
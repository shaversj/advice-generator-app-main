import { useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IconContext } from "react-icons";
import axios from "axios";
import desktopDivider from "/src/assets/images/pattern-divider-desktop.svg";
import mobileDivider from "/src/assets/images/pattern-divider-mobile.svg";
import dice from "/src/assets/images/icon-dice.svg";

function App() {
  const [data, setData] = useState({
    slip: {
      id: 117,
      advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    },
  });

  const getAdvice = async () => {
    try {
      const { data: response } = await axios.get("https://api.adviceslip.com/advice");
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div className={"min-h-[667px] w-full max-w-screen-sm bg-dark-blue font-Manrope lg:grid lg:min-h-[810px] lg:max-w-screen-lg lg:place-items-center"}>
          <main className={"px-4 pt-[118px] lg:px-[450px] lg:pt-0"}>
            <div className={"rounded-lg bg-dark-grayish-blue px-5 lg:rounded-2xl lg:px-[40px]"}>
              <h1 className={"pt-[40px] text-center text-[11.5px] font-medium uppercase tracking-[.215rem] text-neon-green lg:pt-[49px] lg:text-[12.5px] lg:font-bold lg:tracking-[.27rem]"}>Advice #{data.slip.id}</h1>
              <p className={"pt-[26px] text-center text-2xl font-semibold tracking-[0.006em] text-light-cyan lg:pt-[26px] lg:text-[27.8px] lg:font-semibold lg:leading-[2.35rem] lg:tracking-[0.01em]"}>
                <IconContext.Provider value={{ style: { display: "inline", marginTop: "-18px" } }}>
                  <RiDoubleQuotesL size={"1rem"} />
                </IconContext.Provider>

                {data.slip.advice}

                <IconContext.Provider value={{ style: { display: "inline", marginTop: "-18px" } }}>
                  <RiDoubleQuotesR size={"1rem"} />
                </IconContext.Provider>
              </p>
              <picture className={"flex justify-center pb-[60px] pt-[20px] lg:pb-[72px] lg:pt-[40px]"}>
                <source srcSet={desktopDivider} media={"(min-width: 1440px)"} />
                <img src={mobileDivider} alt={""} />
              </picture>
            </div>
            <div className={"-mt-8 flex justify-center"}>
              <button aria-label={"Button to get new advice"} onClick={getAdvice} className={"flex h-16 w-16 items-center justify-center rounded-full bg-neon-green hover:shadow-[0_3px_30px_rgba(84,_255,_170,_0.7)]"}>
                <img src={dice} alt={""} />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

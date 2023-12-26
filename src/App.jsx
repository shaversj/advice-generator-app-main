import desktopDivider from "/src/assets/images/pattern-divider-desktop.svg";
import mobileDivider from "/src/assets/images/pattern-divider-mobile.svg";
import dice from "/src/assets/images/icon-dice.svg";

function App() {
  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div className={"min-h-[667px] w-full max-w-screen-sm bg-dark-blue font-Manrope lg:grid lg:min-h-[810px] lg:max-w-screen-lg lg:place-items-center"}>
          <main className={"px-4 pt-[118px] lg:px-[450px] lg:pt-0"}>
            <div className={"rounded-lg bg-dark-grayish-blue px-5 lg:rounded-2xl lg:px-[40px]"}>
              <h2 className={"fon pt-[40px] text-center text-[11.5px] font-medium uppercase tracking-[.215rem] text-neon-green lg:pt-[49px] lg:text-[12.5px] lg:font-bold lg:tracking-[.27rem]"}>Advice #117</h2>
              <p className={"pt-[26px] text-center text-2xl font-semibold tracking-[0.006em] text-light-cyan lg:pt-[26px] lg:text-[27.8px] lg:font-semibold lg:leading-[2.35rem] lg:tracking-[0.01em]"}>
                "It is easy to sit up and take notice, what's difficult is getting up and taking action."
              </p>
              <picture className={"flex justify-center pb-[60px] pt-[20px] lg:pb-[72px] lg:pt-[40px]"}>
                <source srcSet={desktopDivider} media={"(min-width: 1440px)"} />
                <img src={mobileDivider} alt={""} />
              </picture>
            </div>
            <div className={"-mt-8 flex justify-center"}>
              <div className={"flex h-16 w-16 items-center justify-center rounded-full bg-neon-green"}>
                <img src={dice} alt={""} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

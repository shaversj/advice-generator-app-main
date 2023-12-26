
import desktopDivider from '/src/assets/images/pattern-divider-desktop.svg'
import mobileDivider from '/src/assets/images/pattern-divider-mobile.svg'
import dice from '/src/assets/images/icon-dice.svg'
function App() {

  return (
    <>
      <div className={"bg-black min-h-screen grid place-items-center"}>
          <div className={"max-w-screen-sm w-full bg-dark-blue font-Manrope min-h-[667px]"}>
              <main className={"pt-[118px] px-4"}>
                  <div className={"bg-dark-grayish-blue rounded-lg px-5"}>
                      <h2 className={"text-neon-green text-center pt-[40px] uppercase tracking-[.2rem] text-xs"}>Advice #117</h2>
                      <p className={"text-light-cyan font-semibold text-2xl text-center pt-[32px]"}>
                          "It is easy to sit up and take notice, what's difficult is getting up and taking action."
                      </p>
                      <picture className={"flex justify-center pt-[20px] pb-[60px]"}>
                          <source srcSet={desktopDivider} media={"(min-width: 1440px)"}/>
                          <img src={mobileDivider} alt={""}/>
                      </picture>
                  </div>
                  <div className={"flex justify-center -mt-8"}>
                      <div className={"bg-neon-green rounded-full w-16 h-16 flex items-center justify-center"}>
                          <img src={dice} alt={""}/>
                      </div>
                  </div>

              </main>
          </div>
      </div>
    </>
  )
}

export default App

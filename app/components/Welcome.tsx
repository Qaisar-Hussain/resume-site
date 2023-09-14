import { useRef, useEffect } from "react";

function WelcomeComponent() {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let arr = [
      "","","","I"," ","W","E","L","C","O","M","E"," ","Y","O","U"," ","H","E","R","E",
    ];
    let count = 0;
    let num = 0;
    let arrLength = 0;

    function welcomeFun() {
      count++;
      num = num + 1;
      arrLength = arr.length;

      if (num < arrLength) {
        if (divRef.current) {
          divRef.current.innerHTML += arr[num];
        }
      } else {
        num = 0;
        console.log("");
        if (divRef.current) {
          divRef.current.innerHTML = "";
        }
      }
      if (count === arrLength - 1) {
        clearInterval(interval);
      }
    }

    let interval = setInterval(welcomeFun, 250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div id="div" className=" flex justify-center text-sky-700 tracking-wider font-sans text-6xl max-[1150px]:text-3xl max-sm:text-xl max-[400px]:text-sm" ref={divRef}></div>;
}

export default WelcomeComponent;

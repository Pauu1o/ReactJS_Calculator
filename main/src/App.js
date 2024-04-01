import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setresult] = useState("");
  const HandleClick = (e) => {
    setresult((prev) => prev.concat(e.target.id));
  };
  const clearAll = () => setresult("");
  const deleteOne = () => setresult(result.slice(0, -1));
  const calculate = () => {
    try {
      setresult(eval(result).toString());
    } catch (error) {
      setresult("ERROR");
    }
  };
  return (
    <div className="bg-slate-800 min-h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center w-40% ">
        <div className="bg-slate-900  rounded-t-[1rem] p-3 w-40% shadow-xl shadow-gray-900 border-l-[.1px] border-r-[.1px] border-t-[.1px] border-gray-800">
          <div className="text-white text-left opacity-25 text-sm">
            Calculator
          </div>
          <div className="flex justify-center relative">
            <input
              className="bg-slate-900 text-2xl font-semibold text-white text-right w-full mb-2 mt-2 py-10"
              type="text"
              value={result}
              disabled
            />
          </div>
        </div>

        <div className="bg-calcbot shadow-lg shadow-gray-900 w-full grid grid-cols-4 rounded-b-[1rem] text-white text-sm border-b-[.1px] border-l-[.1px] border-r-[.1px] border-gray-800 ">
          <button
            onClick={clearAll}
            type="button"
            className="operator1 text-gold "
          >
            AC
          </button>
          <button
            onClick={deleteOne}
            type="button"
            className="operator1 justify-center text-gold"
          >
            <div className="flex justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4697 8.4696C10.7626 8.17671 11.2374 8.17671 11.5303 8.4696L14 10.9393L16.4697 8.46961C16.7626 8.17672 17.2374 8.17672 17.5303 8.46961C17.8232 8.7625 17.8232 9.23738 17.5303 9.53027L15.0607 11.9999L17.5303 14.4696C17.8232 14.7625 17.8232 15.2374 17.5303 15.5303C17.2374 15.8232 16.7626 15.8232 16.4697 15.5303L14 13.0606L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303C10.1768 15.2374 10.1768 14.7625 10.4697 14.4696L12.9393 11.9999L10.4697 9.53026C10.1768 9.23737 10.1768 8.76249 10.4697 8.4696Z"
                  fill="#FFB600"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.40595 4.94995C7.25488 4.94995 6.16757 5.47859 5.45665 6.38388L1.89515 10.9191C1.39693 11.5536 1.39693 12.4464 1.89515 13.0808L5.45665 17.616C6.16758 18.5213 7.25488 19.05 8.40595 19.05H19.0526C20.5714 19.05 21.8026 17.8187 21.8026 16.3V7.69995C21.8026 6.18117 20.5714 4.94995 19.0526 4.94995H8.40595ZM6.63637 7.31031C7.06292 6.76714 7.71531 6.44995 8.40595 6.44995H19.0526C19.743 6.44995 20.3026 7.0096 20.3026 7.69995V16.3C20.3026 16.9903 19.743 17.55 19.0526 17.55H8.40595C7.71531 17.55 7.06292 17.2328 6.63637 16.6896L3.07486 12.1544C3.00369 12.0637 3.00369 11.9362 3.07486 11.8455L6.63637 7.31031Z"
                  fill="#FFB600"
                />
              </svg>
            </div>
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator1 text-gold"
            id="%"
          >
            %
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator1 text-gold"
            id="/"
          >
            ÷
          </button>
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="7"
          >
            7
          </button>
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="8"
          >
            8
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="9"
          >
            9
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator1 text-gold"
            id="*"
          >
            x
          </button>
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="4"
          >
            4
          </button>
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="5"
          >
            5
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="6"
          >
            6
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator1 text-gold"
            id="-"
          >
            -
          </button>
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="1"
          >
            1
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="2"
          >
            2
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator2"
            id="3"
          >
            3
          </button>
          <button
            onClick={HandleClick}
            type="button"
            className="operator1 text-gold"
            id="+"
          >
            +
          </button>
          <button
            onClick={HandleClick}
            type="button"
            className="operator2 rounded-bl-[1rem] col-span-2"
            id="0"
          >
            0
          </button>{" "}
          <button
            onClick={HandleClick}
            row-2
            type="button"
            className="operator2"
            id="."
          >
            .
          </button>{" "}
          <button
            onClick={calculate}
            type="button"
            className="operator3 text-black rounded-br-[1rem] py-6"
            id="="
          >
            =
          </button>
        </div>
        <div className="text-sm font-regular py-6 text-white opacity-20">
          Made by Paulo John Jimenea
        </div>
      </div>
    </div>
  );
}

export default App;

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
      <div className="flex flex-col items-center w-full">
        <div className="bg-slate-900 shadow-md rounded-t-[.5rem] p-3 w-1/6">
          <div className="text-white text-left opacity-25 text-2sm">
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

        <div className="bg-calcbot shadow-md  w-1/6 grid grid-cols-4 rounded-b-[0.5rem] text-white text-sm ">
          <button
            onClick={clearAll}
            type="button"
            className="operator1 text-gold"
          >
            AC
          </button>
          <button
            onClick={deleteOne}
            type="button"
            className="operator1 text-gold"
          >
            DEL
          </button>{" "}
          <button
            onClick={HandleClick}
            type="button"
            className="operator1 text-gold"
            id="."
          >
            .
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
            className="operator2 rounded-bl-[0.5rem]"
            id="%"
          >
            %
          </button>{" "}
          <button type="button" className="operator2" id="00">
            00
          </button>
          <button type="button" className="operator" id="0">
            0
          </button>{" "}
          <button
            onClick={calculate}
            type="button"
            className="operator3 text-black rounded-br-[0.5rem] py-8"
            id="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

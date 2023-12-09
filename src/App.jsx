import { useState } from "react";

function App() {
    const [bgColor, setBgColor] = useState("");

    return (
        <>
            <div
                className="h-screen bg-slate-800"
                style={{ backgroundColor: bgColor }}>
                <div className="px-8 absolute bottom-8 w-full flex flex-wrap gap-4">
                    <button
                        onClick={() => {
                            setBgColor("#EF4040");
                        }}
                        className="bg-[#EF4040] text-white font-semibold py-2 px-8 rounded-lg">
                        Red
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#65B741");
                        }}
                        className="bg-[#65B741] text-white font-semibold py-2 px-8 rounded-lg">
                        Green
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#FFB534");
                        }}
                        className="bg-[#FFB534] text-white font-semibold py-2 px-8 rounded-lg">
                        Yellow
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#FF90BC");
                        }}
                        className="bg-[#FF90BC] text-white font-semibold py-2 px-8 rounded-lg">
                        Pink
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#3081D0");
                        }}
                        className="bg-[#3081D0] text-white font-semibold py-2 px-8 rounded-lg">
                        Blue
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#B6BBC4");
                        }}
                        className="bg-[#B6BBC4] text-white font-semibold py-2 px-8 rounded-lg">
                        Gray
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("white");
                        }}
                        className="bg-white text-black font-semibold py-2 px-8 rounded-lg">
                        White
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#711DB0");
                        }}
                        className="bg-[#711DB0] text-white font-semibold py-2 px-8 rounded-lg">
                        Purple
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#750E21");
                        }}
                        className="bg-[#750E21] text-white font-semibold py-2 px-8 rounded-lg">
                        Maroon
                    </button>
                    <button
                        onClick={() => {
                            setBgColor("#161A30");
                        }}
                        className="bg-[#161A30] text-white font-semibold py-2 px-8 rounded-lg">
                        Navy
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;

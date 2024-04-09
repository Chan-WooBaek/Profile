import { TypewriterEffect } from "./ui/typewriter-effect";

export const Landing = ()=> {
  const first_sentence_className = 'text-[3rem]';
  const second_sentence_className = 'text-[5rem] font-semibold';
  const third_sentence_className = 'text-[3rem]';
  return(<div className="flex h-screen w-screen">
    <div className="absolute flex flex-col left-[10%] top-[30%]">
      <TypewriterEffect words={first_sentence} delay={0} textClassName={first_sentence_className} repeat={1}/>
      <TypewriterEffect words={second_sentence} delay={1500} textClassName={second_sentence_className} repeat={3}/>
      <TypewriterEffect words={third_sentence} delay={3000} textClassName={third_sentence_className} repeat={7}/>
    </div>
    
  </div>);
}

const first_sentence = [{ text: "Hi," }, { text: "my" }, {text: "name" }, { text: "is" }];
const second_sentence = [{text: "Chan", className: "text-blue-500" },
  {text: "Woo", className: "text-blue-500" },
  {text: "Baek", className: "text-blue-500" }
];
const third_sentence = [{ text: "I'm" }, { text: "a" }, { text: "full-stack" }, { text: "developer." }];
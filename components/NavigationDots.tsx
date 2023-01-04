import React from "react"
import { Link } from "react-scroll"
import { Dispatch, SetStateAction } from "react"

type NavigationDotsProps = {
  activePage: string
  setActivePage: Dispatch<SetStateAction<string>>
}

function NavigationDots({ activePage, setActivePage }: NavigationDotsProps) {
  return (
    <div className="hidden md:flex md:flex-col fixed top-[60%] right-7 gap-6">
      {["Home", "About", "Works", "Experience", "Contact"].map(
        (item, index) => (
          <Link
            to={item}
            smooth={true}
            offset={0}
            duration={500}
            key={item + index}
            className="w-[10px] h-[10px] rounded-full border-2 border-cyan-700 bg-[#cbcbcb] m-2 cursor-pointer transition duration-300"
            style={activePage === item ? { backgroundColor: "#313BAC" } : {}}
            onClick={() => setActivePage(item)}
          />
        )
      )}
    </div>
  )
}

export default NavigationDots

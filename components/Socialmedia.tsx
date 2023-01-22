import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { SocialIcon } from "react-social-icons"

export default function Socialmedia() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/sethumadh",
      url:"https://linkedin.com/in/sethumadh",
      style: "rounded-tr-md bg-blue",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sethumadh",
      url:"https://github.com/sethumadh",
      style:"bg-[#333333]",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
      url:"mailto:foo@gmail.co",
      style:"bg-[#6fc2b0]",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      url:"/resume.pdf",
      stylesm:"",
      style: "rounded-br-md bg-[#565f69]",
      download: true,
    },
  ]

  return (
    <>
      {/* <div className="flex flex-row justify-center items-center w-2/3 mx-auto md:hidden mt-12">
        {links.map(({ id, url}) => {
          return (
            <div key={id} className="px-2">
                <SocialIcon
                  url={url}
                  bgColor=""
                  fgColor=""
                  target="_blank"
                />
            </div>
          )
        })}
      </div> */}

      <div className="hidden md:flex flex-col top-[65%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}


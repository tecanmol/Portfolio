import { OrbitingCircles } from "./OrbitingCircles"

export function FrameWorks() {
  const skills = [
    "auth0",
    "linux",
    "cplusplus",
    "css3",
    "git",
    "azure",
    "python",
    "html5",
    "javascript",
    "nodejs",
    "react",
    "mongodb",
    "sqlite",
    "tailwindcss",
    "vite.js",
  ]

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))} 
      </OrbitingCircles>
    </div>
  )
}

const Icon = ({ src }) => (
  <img
    src={src}
    className="rounded-sm hover:scale-110 duration-200"
    alt=""
  />
)

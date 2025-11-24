const { default: Link } = require("next/link")

const RootHeader  = () => {
  return <div>
    <div className="flex p-20 justify-between items-center">
      <h1>Prince Nesher C. Magno</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contact">Contact Me</Link>
      </nav>
    </div>
  </div>
}
export default RootHeader;
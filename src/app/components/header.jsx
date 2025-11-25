const { default: Link } = require("next/link")
const ThemeToggle = require("./themetoggle").default

const RootHeader = () => {
  return (
    <div className="bg-[#0A174E] text-[#D4AF37]"> 
      <div className="flex p-5 justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Prince Nesher C. Magno</h1>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-[#F0D483] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#F0D483] transition-colors">About Me</Link>
          <Link href="/project" className="hover:text-[#F0D483] transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-[#F0D483] transition-colors">Contact Me</Link>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  )
}
export default RootHeader
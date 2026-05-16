function Navbar() {
  return (
    <nav className=" bg-white-800 flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">
        MY TASK APP
      </h1>

      <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition">
        Dark Mode
      </button>
    </nav>
  )
}

export default Navbar
function NavBar() {
  return (
    <div className="flex gap-3 justify-end items-center mb-10 ">
      <a className="bg-black text-white p-2 rounded" href="#">
        HOME
      </a>
      <a href="#timeline">BIO</a>
      <a href="#takeaway">LEARN</a>
    </div>
  );
}

export default NavBar;

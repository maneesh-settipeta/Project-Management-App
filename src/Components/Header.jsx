function Header({ returnHomePage }) {
  return (
    <div className="border-b border-b-slate-900 ">
      <h1>
        <button
          onClick={returnHomePage}
          className="font-serif text-2xl py-1 px-4"
        >
          Project-Management Dashboard
        </button>
      </h1>
    </div>
  );
}

export default Header;

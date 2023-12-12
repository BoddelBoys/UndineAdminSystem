import Link from "next/link";

export const NavBar = () => {
  return (
    <div>
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="btn btn-primary drawer-button absolute left-4 top-4 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-start drawer z-0">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu min-h-full w-80 bg-base-200 p-4 pt-32 text-base-content">
            {/* Sidebar content here */}
            <li className="py-2">
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                <Link href="/linechart">Line-Chart</Link>
              </button>
            </li>
            <li className="py-2">
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                <Link href="/scatterplot">Scatterplot-Chart</Link>
              </button>
            </li>
            <li className="py-2">
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                <Link href="/boatsystems">Boatsystems</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

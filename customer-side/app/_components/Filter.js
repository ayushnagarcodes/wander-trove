"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <BtnFilter
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="all"
      >
        All Cabins
      </BtnFilter>
      <BtnFilter
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="small"
      >
        1&mdash;3 guests
      </BtnFilter>
      <BtnFilter
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="medium"
      >
        4&mdash;7 guests
      </BtnFilter>
      <BtnFilter
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="large"
      >
        8&mdash;12 guests
      </BtnFilter>
    </div>
  );
}

function BtnFilter({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;

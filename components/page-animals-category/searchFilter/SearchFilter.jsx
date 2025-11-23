"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Select from "react-select";

import "./searchFilter.scss";

const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlerUpdateParam = (key, value) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    !value || value === false ? current.delete(key) : current.set(key, value);

    const search = current.toString();

    const query = search ? `?${search}` : "";

    //{scroll: false} чтобы не прыгало на верх
    router.push(`${pathname}${query}`, { scroll: false });
  };

  const ageSelect = [
    { label: "Выберите возраст", value: "" },
    { label: "До 1 года", value: "0-1" },
    { label: "1 - 3 года", value: "1-3" },
    { label: "4 - 6 лет", value: "4-6" },
    { label: "От 7 лет", value: "7+" },
  ];

  const sizeSelect = [
    { label: "Выберите размер", value: "" },
    { label: "До 15 кг (маленький)", value: "0-15" },
    { label: "15 - 25кг (Средний)", value: "15-25" },
    { label: "От 25кг (Большой)", value: "25+" },
  ];

  const genderSelect = [
    { label: "Выберите пол", value: "" },
    { label: "Мальчик", value: "male" },
    { label: "Девочка", value: "female" },
  ];

  const currentAge = searchParams.get("age") || "";
  const currentSize = searchParams.get("size") || "";
  const currentGender = searchParams.get("gender") || "";
  const currentVaccine = searchParams.get("vaccine") === "true";

  return (
    <div className="filter">
      <label>
        Врзраст:
        <Select
          options={ageSelect}
          value={ageSelect.find((op) => op.value === currentAge)}
          onChange={(option) => handlerUpdateParam("age", option.value)}
        />
      </label>
      <label>
        Размер:
        <Select
          options={sizeSelect}
          value={sizeSelect.find((op) => op.value === currentSize)}
          onChange={(option) => handlerUpdateParam("size", option.value)}
        />
      </label>
      <label>
        Пол:
        <Select
          options={genderSelect}
          value={genderSelect.find((op) => op.value === currentGender)}
          onChange={(option) => handlerUpdateParam("gender", option.value)}
        />
      </label>
      <label>
        привитые
        <input
          type="checkbox"
          checked={currentVaccine}
          onChange={(e) => handlerUpdateParam("vaccine", e.target.checked)}
        />
      </label>
    </div>
  );
};

export default SearchFilter;

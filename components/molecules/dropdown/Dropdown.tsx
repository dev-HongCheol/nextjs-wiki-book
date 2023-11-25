import React, { FormEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";
import "./dropdown.css";
import { Text } from "@components/atoms";

export interface DropdownOption {
  value: string | number | null;
  label?: string;
}

interface DropdownItemProps {
  item: DropdownOption;
}

const DropdownItem = ({ item }: DropdownItemProps) => {
  return (
    <div className="flex items-center">
      <Text className="m-0 text-msall" variant="primary">
        {item.label ?? item.value}
      </Text>
    </div>
  );
};

interface DropwonProps {
  options: DropdownOption[];
  value?: string | number;
  name?: string;
  placehoder?: string;
  hasError?: boolean;
  onChange: (selected?: DropdownOption) => void;
}

const Dropdown = ({ options, value, name, placehoder, hasError, onChange }: DropwonProps) => {
  const initalItem = options.find((option) => option.value === value);
  const [isOpenValue, setIsOpenValue] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initalItem);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current) {
        const elems = dropdownRef.current.querySelectorAll("*");
        for (let i = 0; i < elems.length; i++) {
          if (elems[i] == e.target) {
            return;
          }
        }
        setIsOpenValue(false);
      }
    },
    [dropdownRef],
  );

  const handleMouseDown = (e: SyntheticEvent) => {
    setIsOpenValue((pre) => !pre);
    e.stopPropagation();
  };

  const handleSelectedValue = (e: FormEvent, item: DropdownOption) => {
    e.stopPropagation();

    setSelectedItem(item);
    setIsOpenValue(false);
    onChange && onChange(item);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick, false);
    document.addEventListener("touchend", handleDocumentClick, false);
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown-root">
      <div
        className={`dropdown-control ${hasError ? "border-red-500" : "border"}`}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleMouseDown}
        data-testid="dropdown-control"
      >
        {selectedItem && (
          <div className="text-black dark:text-white">
            <DropdownItem item={selectedItem}></DropdownItem>
          </div>
        )}
        {/* 아무것도 선택 안되었을 경우 */}
        {!selectedItem && <div className="dropdown-placehoder">{placehoder}</div>}

        <input
          type="hidden"
          name={name}
          value={selectedItem?.value ?? ""}
          onChange={() => onChange && onChange(selectedItem)}
        />
        <div
          className={`dropdown-arrow ${
            isOpenValue
              ? "border-x-transparent border-b-[#222222] border-t-0 border-r-[5px] border-l-[5px] border-b-[5px]"
              : "border-x-transparent border-t-[#222222] border-t-[5px] border-r-[5px] border-l-[5px] border-b-0"
          }`}
        >
          {" "}
        </div>
      </div>

      {isOpenValue && (
        <div className="dropdwon-menu">
          {options.map((option, index) => (
            <div
              className="dropdown-option"
              key={index}
              onMouseDown={(e) => handleSelectedValue(e, option)}
              onClick={(e) => handleSelectedValue(e, option)}
              data-testid="dropdown-option"
            >
              <DropdownItem item={option} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

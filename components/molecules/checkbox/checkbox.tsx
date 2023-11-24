import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { Text } from "@components/atoms";
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> & {
  label?: string;
};

const Checkbox = ({ id, label, onChange, checked, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const ref = useRef<HTMLInputElement>(null);
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      ref.current?.click();
      setIsChecked((isChecked) => !isChecked);
    },
    [ref, setIsChecked],
  );

  useEffect(() => {
    setIsChecked(checked ?? false);
  }, [checked]);

  return (
    <>
      <input
        className="hidden"
        readOnly={!onChange}
        ref={ref}
        onChange={onChange}
        type="checkbox"
        {...props}
      />
      <div className="flex items-center">
        {checked ?? isChecked ? (
          <button onClick={onClick}>
            <CheckBoxOutlinedIcon />
          </button>
        ) : (
          <button onClick={onClick}>
            <CheckBoxOutlineBlankOutlinedIcon />
          </button>
        )}

        {label && label.length > 0 && (
          <label htmlFor={id} onClick={onClick}>
            <Text variant="primary">{label}</Text>
          </label>
        )}
      </div>
    </>
  );
};

export default Checkbox;

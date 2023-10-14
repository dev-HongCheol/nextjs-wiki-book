import React, { useCallback, useState } from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  minRows?: number;
  maxRows?: number;
  hasError?: boolean;
}

const Textarea = ({
  rows = 5,
  minRows = 5,
  maxRows = 10,
  children,
  hasError,
  onChange,
  ...rest
}: TextareaProps) => {
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows));

  console.assert(!(rows < minRows), "TextArea : rows should be greater then min Rows");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24;
      const previousRows = e.target.rows;

      e.target.rows = minRows;

      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight);

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      setTextareaRows(currentRows < maxRows ? currentRows : maxRows);
      onChange && onChange(e);
    },
    [onChange, minRows, maxRows],
  );
  return (
    <textarea
      className={`border ${hasError ? "border-red-500" : ""}`}
      onChange={handleChange}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </textarea>
  );
};

export default Textarea;

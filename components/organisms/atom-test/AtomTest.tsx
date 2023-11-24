"use client";
import React from "react";
import { Badge, Button, Input } from "@components/atoms";
import { Checkbox } from "@components/molecules";

const AtomTest = () => {
  return (
    <>
      <Button variant="primary">버튼</Button>
      <Button variant="secondary" className="border-4">
        버튼
      </Button>
      <Input name="" value="test" type="text" className="" hasError />
      <Badge className="bg-slate-500">배찌1111111</Badge>
      <Checkbox label="check" id="check1" />
    </>
  );
};

export default AtomTest;

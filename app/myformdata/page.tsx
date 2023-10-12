"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type MyFormData = {
  fistName: string;
  lastName: string;
  category: string;
  isChecked: false;
};

const MyFormDatapage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MyFormData>();

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("fistName", { required: true })} placeholder="이름" />
      {errors.fistName && <div>이름을 입력해주세요</div>}
      <br />
      <input {...register("lastName", { required: true })} placeholder="성" />
      {errors.lastName && <div>성을 입력해주세요</div>}
      <br />
      <select
        {...register("category", { required: true })}
        placeholder="카테고리"
      >
        <option value="">선택..</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      {errors.category && <div>카테고리를 입력해주세요</div>}
      <br />
      <Controller
        name="isChecked"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <input type="checkbox" onChange={onChange} />
        )}
      />
      {errors.isChecked && <div>체크박스를 선택해주세요.</div>}
      <button type="submit">submit</button>
    </form>
  );
};

export default MyFormDatapage;

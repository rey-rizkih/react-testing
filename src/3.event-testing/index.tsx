import React from "react";

type Props = { onChange: React.ChangeEventHandler<HTMLInputElement> };

const Form = ({ onChange }: Props) => {
  return <input aria-label="input name" onChange={onChange} />;
};

export default Form;

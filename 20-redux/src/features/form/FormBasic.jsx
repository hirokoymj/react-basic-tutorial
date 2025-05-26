import React, { useState } from "react";

const dayOptions = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const ageOptions = ["10 - 15", "16 - 20", "over 25"];
const radioOption = ["male", "female"];
//firstName - input
//age - dropdown
//gender - male/female - radio
//day - checkbox

export const FormBasic = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    age: "",
    gender: "male",
    days: [],
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const newVal = e.target.value;
    const checked = e.target.checked;
    console.log(checked);
    if (checked) {
      setFormValues((prev) => ({
        ...prev,
        days: [...prev.days, newVal],
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        days: formValues.days.filter((d) => d !== newVal),
      }));
    }
  };
  const onSubmit = () => {
    console.log(formValues);
  };

  return (
    <>
      <div>
        <span>FirstName:</span>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <span>Age:</span>
        <select name="age" value={formValues.age} onChange={handleChange}>
          {ageOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Gender:</span>
        {radioOption.map((d, index) => (
          <span key={index}>
            <input
              type="radio"
              name="gender"
              value={d}
              onClick={handleChange}
              checked={d === formValues.gender ? true : false}
            />
            {d}
          </span>
        ))}
      </div>
      <div>
        Days:
        {dayOptions.map((day, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="days"
              value={day}
              onClick={handleCheckboxChange}
              checked={formValues.days.indexOf(day) > -1}
            />
            {day}
          </label>
        ))}
      </div>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

import { TextField } from "@mui/material";
import { localTimeInput, maxDate, type InputsProps } from "../../types";
import { Box } from "@mui/system";

export default function OtherInputs({ handleChange, value }: InputsProps) {
  return (
    <div className="form-field">
      {/* <label htmlFor="date">תאריך:</label> */}
      <input
        type="date"
        name="date"
        id="date"
        required
        max={maxDate}
        value={value.date}
        onChange={handleChange}
      />

      {/* <label htmlFor="time">שעה :</label> */}
      <input
        id="time"
        type="time"
        name="eventTime"
        required
        max={value.date == maxDate ? localTimeInput : "23:59"}
        value={value.eventTime}
        onChange={handleChange}
      />

      {/* <label htmlFor="name">יחידה:</label> */}
      <input
        type="text"
        id="name"
        name="subUnit"
        required
        placeholder="מחלקת דיגיטל"
        onChange={handleChange}
        value={value.subUnit}
      />

      <br />
      <textarea
        id="description"
        name="description"
        required
        placeholder="תיאור מקרה (עד 800 תווים)*"
        maxLength={800}
        value={value.description}
        onChange={handleChange}
      ></textarea>

      <br />
      <textarea
        id="initialRecommendations"
        name="initialRecommendations"
        placeholder="המלצות ראשוניות  (עד 800 תווים)"
        maxLength={800}
        value={value.initialRecommendations}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

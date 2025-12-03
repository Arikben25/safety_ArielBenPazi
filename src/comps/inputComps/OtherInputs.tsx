import { localTimeInput, maxDate, type InputsProps } from "../../types";

export default function OtherInputs({ handleChange, value }: InputsProps) {

  return (
    <div className="form-field">
      <label htmlFor="date">תאריך:</label>
      <input
        type="date"
        name="date"
        id="date"
        required
        max={maxDate}
        value={value.date }
        onChange={handleChange}
      />

      <label htmlFor="time">שעה :</label>
      <input
        id="time"
        type="time"
        name="eventTime"
        required
        max={value.date == maxDate ? localTimeInput : "23:59"}
        value={value.eventTime}
        onChange={handleChange}
      />

      <label htmlFor="name">יחידה:</label>
      <input
        type="text"
        id="name"
        name="subUnit"
        required
        placeholder="מחלקת דיגיטל"
        onChange={handleChange}
        value={value.subUnit}
      />

      <label htmlFor="description">תיאור מקרה:</label>
      <br />
      <textarea
        id="description"
        name="description"
        required
        maxLength={800}
        value={value.description}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="initialRecommendations">המלצות ראשוניות:</label>
      <br />
      <textarea
        id="initialRecommendations"
        name="initialRecommendations"
        required
        maxLength={800}
        value={value.initialRecommendations}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

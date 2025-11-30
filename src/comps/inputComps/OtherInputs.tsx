interface Field {
  value: {
    activeType: string;
    category: string;
    unitActivityType: string;
    weather: string;
    location: string;
    results: string;
    eventSeverity: string;
    injuriesLevel: string;
    date: string;
    subUnit: string;
    description: string;
    initialRecommendations: string;
  };
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function OtherInputs({ value, handleChange }: Field) {
  return (
    <div className="form-field">
      <label htmlFor="date">תאריך:</label>
      <input
        type="datetime-local"
        name="date"
        id="date"
        max={new Date().toISOString().slice(0, 16)}
        onChange={handleChange}
        value={value.date}
      />

      <label htmlFor="name">יחידה:</label>
      <input
        type="text"
        id="name"
        name="subUnit"
        placeholder="מחלקת דיגיטל"
        onChange={handleChange}
        value={value.subUnit}
      />

      <label htmlFor="description">תיאור מקרה:</label>
      <br />
      <textarea
        id="description"
        name="description"
        maxLength={800}
        value={value.description}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="initialRecommendations">המלצות ראשוניות:</label>
      <br />
      <textarea
        id="initialRecommendations"
        name="initialRecommendations"
        maxLength={800}
        value={value.initialRecommendations}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

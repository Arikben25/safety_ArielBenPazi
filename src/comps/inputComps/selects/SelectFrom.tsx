import SelectField from "./SelectField";

interface Field {
  value: {  activeType: string;
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
  initialRecommendations: string;};
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectFrom({ value, handleChange }: Field) {

  const activityTypeArr = [
    "פעילות מבצעית/לחימה",
    "אימון",
    "הכשרה",
    "שגרה",
    "פנאי",
    "חופשה",
  ];

  const categoryArr = [
    "נשק ומקלעים",
    "דרכים",
    "תחמושת",
    `ירי דו"צ`,
    "מזג-אוויר",
    `רק"מ וצמ"ה קרביים`,
    `שת"פ אוויר`,
    "עבודה",
    "אוויר",
    "בטיחות ימי",
    "ספורט ואקסטרים",
    "נפילות/חבלות",
    "חריגות ירי או תנועה של כוחות בשטחי אימונים",
    `חומ"ס`,
    `אמל"ח (לא נשק/מקלעים)`,
    "אש",
    `טג"ח קרבי`,
    `שת"פ ים`,
    "ייעודי עורף/חילוץ והצלה",
    "אמצעי רום קרוב לקרקע",
    "כושר גופני/קרבי",
  ];

  const unitActivityTypeArr = [
    'תע"ם',
    "אימונים",
    "הכשרה",
    "רגיעה/ מנהלה",
    "מלחמה/מבצע צבאי נרחב",
  ];

  const weatherOptions = [
    "בחר/י",
    "שרב/עומס חום",
    "שלג",
    "סופת חול",
    "גשם",
    "ערפל",
    "התקרחות",
    "ברד",
    "מעונן",
    "נאה",
    "רוח",
    "ים סוער",
    "מים שקטים",
  ];

  const locationArr = ["בסיס", "שטח אזרחי", "שטח אש", "רציף"];

  const eventSeverityArr = ["קל", "בינוני", "חמור"];

  const resultsArr = [
    "אין נפגעים אין נזק",
    "אין נפגעים יש נזק",
    "יש נפגעים אין נזק",
    "יש נפגעים יש נזק",
  ];

   const injuriesLevelArr = [
    "ללא פגיעה",
    "פגוע קל (ללא אשפוז)",
    "פגוע קל (שאושפז)",
    "פגוע בינוני",
    "פגוע קשה/אנוש",
    "חלל",
  ];

  return (
    <div className="selects">
      <SelectField
        label="מאפיין פעילות הפרט"
        value={value.activeType}
        name="activeType"
        options={activityTypeArr}
        onChange={handleChange}
      />

      <SelectField
        label="מאפיין תחומי"
        value={value.category}
        name="category"
        options={categoryArr}
        onChange={handleChange}
      />

      <SelectField
        label="פעילות היחידה"
        value={value.unitActivityType}
        name="unitActivityType"
        options={unitActivityTypeArr}
        onChange={handleChange}
      />

      <SelectField
        label="מזג אוויר: "
        value={value.weather}
        name="weather"
        options={weatherOptions}
        onChange={handleChange}
      />

      <SelectField
        label="מקום האירוע:"
        value={value.location}
        name="location"
        options={locationArr}
        onChange={handleChange}
      />

      <SelectField
        label="חומרת האירוע:"
        value={value.eventSeverity}
        name="eventSeverity"
        options={eventSeverityArr}
        onChange={handleChange}
      />

      <SelectField
        label="תוצאות האירוע:"
        value={value.results}
        name="results"
        options={resultsArr}
        onChange={handleChange}
      />
      

      {(value.results === "יש נפגעים אין נזק" || value.results === "יש נפגעים יש נזק") && <SelectField
        label="חומרת הפציעה:"
        value={value.injuriesLevel}
        name="injuriesLevel"
        options={injuriesLevelArr}
        onChange={handleChange}
      />}
    </div>
  );
}
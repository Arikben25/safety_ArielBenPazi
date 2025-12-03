import type { Field } from "../types";

export const activityTypeArr = [
  "פעילות מבצעית/לחימה",
  "אימון",
  "הכשרה",
  "שגרה",
  "פנאי",
  "חופשה",
];

export const categoryArr = [
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

export const unitActivityTypeArr = [
  'תע"ם',
  "אימונים",
  "הכשרה",
  "רגיעה/ מנהלה",
  "מלחמה/מבצע צבאי נרחב",
];

export const weatherOptions = [
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

export const locationArr = ["בסיס", "שטח אזרחי", "שטח אש", "רציף"];

export const eventSeverityArr = ["קל", "בינוני", "חמור"];


export const resultsArr = [
  "אין נפגעים אין נזק",
  "אין נפגעים יש נזק",
  "יש נפגעים אין נזק",
  "יש נפגעים יש נזק",
];

export const injuriesLevelArr = [
  "ללא פגיעה",
  "פגוע קל (ללא אשפוז)",
  "פגוע קל (שאושפז)",
  "פגוע בינוני",
  "פגוע קשה/אנוש",
  "חלל",
];

type FormOptionsArray =
  | typeof activityTypeArr
  | typeof categoryArr
  | typeof unitActivityTypeArr
  | typeof weatherOptions
  | typeof locationArr
  | typeof eventSeverityArr
  | typeof resultsArr
  | typeof injuriesLevelArr;

export interface FormSchemaItem {
  title: string;
  name: keyof Field;
  required: boolean;
  options?: FormOptionsArray;
  type?: string;
}

export const formSchema: FormSchemaItem[] = [
  {
    title: "מאפיין פעילות הפרט",
    name: "activeType",
    required: true,
    options: activityTypeArr,
  },
  {
    title: "מאפיין תחומי",
    name: "category",
    required: true,
    options: categoryArr,
  },
  {
    title: "פעילות היחידה",
    name: "unitActivityType",
    required: true,
    options: unitActivityTypeArr,
  },
  {
    title: " מזג אוויר",
    name: "weather",
    required: true,
    options: weatherOptions,
  },
  {
    title: "מיקום",
    name: "location",
    required: true,
    options: locationArr,
  },
  {
    title: "חומרת האירוע",
    name: "eventSeverity",
    required: true,
    options: eventSeverityArr,
  },
  {
    title: "תוצאות האירוע",
    name: "results",
    required: true,
    options: resultsArr,
  },
  {
    title: "חומרת הפציעה",
    name: "injuriesLevel",
    required: true,
    options: injuriesLevelArr,
  },
  {
    title: "יום האירוע",
    name: "date",
    required: true,
    type: "date",
  },
  {
    title: "שעת האירוע",
    name: "eventTime",
    required: true,
    type: "time",
  },
  {
    title: "יחידת משנה",
    name: "subUnit",
    required: true,
    type: "text",
  },
  {
    title: "תיאור מקרה",
    name: "description",
    required: true,
    type: "textarea",
  },
  {
    title: "המלצות ראשוניות",
    name: "initialRecommendations",
    required: false,
    type: "textarea",
  },
];

export const tableHeaders = [
  { title: "יחידת משנה", name: "subUnit" },
  { title: "תיאור מקרה", name: "description" },
  { title: "מאפיין פעילות הפרט", name: "activeType" },
  { title: "מאפיין תחומי", name: "category" },
  { title: "פעילות היחידה", name: "unitActivityType" },
  { title: " מזג אוויר", name: "weather" },
  { title: "מיקום", name: "location" },
  { title: "חומרת האירוע", name: "eventSeverity" },
  { title: "תוצאות האירוע", name: "results" },
  { title: "חומרת הפציעה", name: "injuriesLevel" },
  { title: "המלצות ראשוניות", name: "initialRecommendations" },
  { title: "יום האירוע", name: "date" },
  { title: "שעת האירוע", name: "eventTime" },
] as const;

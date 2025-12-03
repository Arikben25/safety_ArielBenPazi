export interface Field {
  activeType: string;
  category: string;
  unitActivityType: string;
  weather: string;
  location: string;
  results: string;
  eventSeverity: string;
  injuriesLevel: string;
  date: string;
  eventTime: string;
  subUnit: string;
  description: string;
  initialRecommendations: string;
}

const now = new Date();
 export const localTimeInput =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");
 export const maxDate = now.toISOString().split("T")[0];


export const defaultForm: Field = {
  subUnit: "",
  description: "",
  activeType: "",
  category: "",
  unitActivityType: "",
  weather: "",
  location: "",
  eventSeverity: "",
  results: "",
  injuriesLevel: "",
  initialRecommendations: "",
  date: maxDate,
  eventTime: localTimeInput,
};

export interface InputsProps {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: Field;
}
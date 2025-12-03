import SelectField from "./SelectField";
import { resultsArr, injuriesLevelArr } from "../../../data/constants";
import { formSchema } from "../../../data/constants";
import type { InputsProps } from "../../../types";

export default function SelectFrom({ handleChange, value }: InputsProps) {

  return (
    <div className="selects">
      {formSchema.slice(0, 7).map((obj) => (
        <SelectField
          label={obj.title}
          name={obj.name}
          required={obj.required}
          value={value[obj.name]}
          options={obj.options}
          onChange={handleChange}
        />
      ))}

      {(value.results === resultsArr[2] || value.results === resultsArr[3]) && (
        <SelectField
          label="חומרת הפציעה:"
          value={value.injuriesLevel}
          name="injuriesLevel"
          required={true}
          options={injuriesLevelArr}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

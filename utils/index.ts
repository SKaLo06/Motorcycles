import { MotorCycleProps, FilterProps } from "@/types";
import motorcycles from './motorcycles.json';

export async function fetchMotorcycles(filters: FilterProps) {
  const { manufacturer, year, model, limit, type } = filters;

  try {
    const typedMotorcycles: MotorCycleProps[] = motorcycles; 

    const filteredMotorcycles = typedMotorcycles.filter((motorcycle: MotorCycleProps) => {
      let isMatch = true;

      if (manufacturer && motorcycle.make.toLowerCase() !== manufacturer.toLowerCase()) {
        isMatch = false;
      }

      if (year !== undefined && (motorcycle.year < year || motorcycle.year > year)) {
        isMatch = false;
      }
          
      if (model && !motorcycle.model.toLowerCase().includes(model.toLowerCase())) {
        isMatch = false;
      }

      if (type && motorcycle.starter.toLowerCase() !== type.toLowerCase()) {
        isMatch = false;
      }

      return isMatch;
    });

    const limitedMotorcycles = limit ? filteredMotorcycles.slice(0, limit) : filteredMotorcycles;

    return limitedMotorcycles;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

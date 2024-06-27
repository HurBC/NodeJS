export const cleanData = <T extends { [label: string]: any }>(obj: T, optionalFields: (keyof T)[]) => {
  const cleanedData = {...obj};

  Object.entries(obj).forEach(([key, value]) => {
    if (optionalFields.includes(key as keyof T) && (value === null || value === undefined || value == "")) {
      delete cleanedData[key];
    }
  });

  return cleanedData;
}
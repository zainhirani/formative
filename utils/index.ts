export function timeFormatter(time: any) {
    const newTime = time.split(".");
    return new Date(newTime[0]);
  }


export const yearsSelectOptions = () => {
    // const currentYear = new Date().getFullYear();
    const currentYear = 2030;
    const startYear = 1990;
    const years = [];
  
    for (let year = startYear; year <= currentYear; year++) {
      years.push({
        value: year,
        label: String(year),
      });
    }
  
    return years;
  };
  
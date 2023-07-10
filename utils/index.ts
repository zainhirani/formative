// @ts-nocheck
import dayjs from "dayjs";

export function timeFormatter(time: any) {
  const newTime = time.split(".");
  return new Date(newTime[0]);
}

export const formatArrayOfObjectsForFormData = (
  apiDataKey: string,
  arr: [],
  formDataInstance: object,
) => {
  if (!arr.length) return;

  arr.forEach((obj, ind) => {
    Object.keys(obj).forEach((item, index) => {
      formDataInstance.append(`${apiDataKey}[${ind}][${item}]`, `${obj[item]}`);
    });
  });
};

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

export const removeHTMLTags = (html: string): any => {
  if (!html) return;
  // Regex pattern to match HTML tags
  const regex = /<[^>]+>/g;
  return html?.replace(regex, "");
};

export const isStringNotURL = (str: string): any => {
  if (!str) return;
  const isNotURL: RegExp = /^(?!(?:https?:\/\/|www\.)[^\s.]+\.[^\s]{2,})/;

  return isNotURL?.test(str);
};

export const formatOptions = (options, answer) => {
  // Parse the options and answer strings into objects and arrays
  const parsedOptions = JSON.parse(options);
  const parsedAnswer = JSON.parse(answer);

  // Create an array to store the formatted options
  const formattedOptions = [];

  // Iterate through each option
  parsedOptions.forEach((option, index) => {
    // Create an object for the formatted option
    const formattedOption = {
      correct: parsedAnswer.includes(option.key),
      id: (index + 1).toString(),
      inputText: option.value,
      locked: false,
      text: "Option " + option.key,
    };
    // Add the formatted option to the array
    formattedOptions.push(formattedOption);
  });

  return formattedOptions;
};

export const generateGreetings = (): string => {
  var currentHour = dayjs().hour();

  if (currentHour >= 0 && currentHour < 12) {
    return "Good Morning !";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Good Afternoon !";
  } else if (currentHour >= 15 && currentHour < 23) {
    return "Good Evening !";
  } else {
    return "";
  }
};

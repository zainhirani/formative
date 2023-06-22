// @ts-nocheck
export function timeFormatter(time: any) {
    const newTime = time.split(".");
    return new Date(newTime[0]);
  }


  export const formatArrayOfObjectsForFormData = (apiDataKey:string, arr:[], formDataInstance:object) =>{
    if(!arr.length)return


    arr.forEach((obj, ind)=>{
  
      Object.keys(obj).forEach((item,index)=>{
        formDataInstance.append(`${apiDataKey}[${ind}][${item}]`,`${obj[item]}`)
      })
      
    })


  }

  export const removeHTMLTags = (html: string): any=> {
    if(!html)return
    // Regex pattern to match HTML tags
    const regex = /<[^>]+>/g; 
    return html.replace(regex, '');
  }



export const  isStringNotURL = (str: string): any=>  {
  if(!str)return
  const isNotURL: RegExp = /^(?!(?:https?:\/\/|www\.)[^\s.]+\.[^\s]{2,})/;

  return isNotURL.test(str);
}


export  const formatOptions = (options, answer)=>  {
  // Parse the options and answer strings into objects and arrays
  const parsedOptions = JSON.parse(options);
  const parsedAnswer = JSON.parse(answer);

  // Create an array to store the formatted options
  const formattedOptions = [];

  // Iterate through each option
  parsedOptions.forEach((option, index) => {
    console.log("🚀 ~ file: index.ts:50 ~ parsedOptions.forEach ~ option:", option)
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
}


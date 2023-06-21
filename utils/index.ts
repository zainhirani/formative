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


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

  export const removeHTMLTags = (html: string): string=> {
    const regex = /<[^>]+>/g; // Regex pattern to match HTML tags
    return html.replace(regex, '');
  }
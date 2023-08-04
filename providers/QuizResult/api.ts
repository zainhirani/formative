import service from "services";
import { QuizResult } from "./types";


export async function listing(props?:QuizResult.ListingAPIPayload):Promise<QuizResult.ListingResponse> {
    return service ({
        method:'GET',
        url:`/quiz-result`,
        queryParams:props
    })
}

  //Detail
  export async function detail(
    props: QuizResult.DetailAPIPayload,
  ): Promise<QuizResult.DetailResponse> {
    return service({
      method: "GET",
      url: `/quiz-result/${props.id}`,
    });
  }

  // Download

  export async function download(
    props?: QuizResult.downloadAPIPayload,
  ): Promise<QuizResult.downloadResponse> {
    return service({
      method: "GET",
      formData:true,
      headers:{
        'Content-Type': 'text/csv',
      },
      url: `/quiz-result/${props?.data.id}/download`
      
      
    });
  }

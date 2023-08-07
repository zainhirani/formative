export namespace QuizResult {
    export type Item = {
        id:number,
        score:number,
        tradition:number,
        total_time:number,
        quizId:number,
        createdAt:string | Date,
        course_name:string,
        difficulty:string | null,
        folders_name:string,
        quiz_name:string,
        status:string
    }
    export type studentItem = {
      attemptId:number,
      first_name:string,
      last_name:string,
      score:number,
      std_id:number,
      tradition:number,
      total_time:number
    }
    export type questionItem = {
      id:number,
      answer:string,
      averageAttempts:string,
      averageTime:string,
      detail:string,
      difficulty:string,
      option:string,
      title:string,
      optionStatistics:{
        option_count:number,
        option_selected:string
      }[]
    }

      //Listing
  export type ListingProps = {
    quizName?:string,
    courseId?:number,
    folderId?:number,
    limit?:number

  };
  export type ListingResponse = Item[]
  export interface ListingAPIPayload extends ListingProps {}

    // Detail
    export type DetailProps = {
      id?:number
    }
    export type DetailResponse = {
      quizId:number,
      name:string,
      student:studentItem[],
      questions:questionItem[]
      
   
    }
    export interface DetailAPIPayload extends DetailProps {}

    //Download
    export type downloadProps = {}
    export type downloadResponse = {}
    export type downloadAPIMutationPayload = {
      id:number
    }
    export interface downloadAPIPayload extends downloadProps  {
      data:downloadAPIMutationPayload
    }
  }

   

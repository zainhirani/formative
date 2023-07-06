import { type } from "os";

export namespace QuizResultsCourse {
  export type Item = {
    id: number;
    quizId:number;
    status:string;
    quiz_name:string;
    course_name:string;
    folders_name:string;
    difficulty:number;
    std_difficulty:number;
    score:number;
    tradition:number;
    createdAt: string | Date;
    updatedAt: string | Date;
  };

  //Coure Listing
  export type ListingProps = {
    
  };
  export type ListingResponse = {}
  export interface ListingAPIPayload extends ListingProps {}

  //QuizReslut Listing
  export type QuizResultListingProps = {
    quizName?:string;
    courseId?:number;
    beforeDate?:string | Date ;
    afterDate?:string | Date  ;
    Limit?: number ;
    Page?: number;
  };
  export type QuizResultListingResponse = {data:Item[],count:number}
  export interface QuizResultListingAPIPayload extends QuizResultListingProps {}


//Attempt Quiz


  export type AttemptQuizProps = {
    quizId?:number
  };
  export type AttemptQuizResponse = { quizId: number;
    name: string;
    student: {
      std_id: number;
      attemptId: number;
      first_name: string;
      last_name: string;
      score: number;
      tradition: number;
      total_time: number;
    }[];
    questions: {
      id: number;
      title: string;
      detail: string;
      option: string;
      answer: string;
      averageAttempts: string;
      averageTime: string;
      difficulty: string;
      score: string;
      optionStatistics: Record<string, number>;
    }[]};
  export interface AttemptQuizAPIPayload extends AttemptQuizProps {};




 }

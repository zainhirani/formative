export namespace Quiz {
  export type Fields = {
    date_of_birth: string;
    experience: number;
    working_part_time: boolean;
    athlete: string;
    concept: string;
    hobbies: string;
    learning_sequence: string;
    math_skills: string;
    study_prefer: string;
    taken_biochemistry: boolean;
    volunteer: boolean;
  };

  

  //Take Quiz Listing
  export type TakeQuizListingProps = {};
  export type TakeQuizListingResponse = {data:[],count:number}
  export interface TakeQuizListingAPIPayload extends TakeQuizListingProps {}

  //Courses Listing
  export type CourseListingProps = {};
  export type CourseListingResponse = {data:[data:[] |undefined,count: number |undefined]}
  export interface CourseListingAPIPayload extends CourseListingProps {}
 
  //Get Courses

  export type CoursesProps ={}
  export type CoursesResponse = {}
  export interface CoursesAPIPayload extends CoursesProps {}

  //Get Quiz By Id

  export type QuesQuizByIdProps ={id: number | string | string[] | undefined,}
  export type QuesQuizByIdResponse = {}

  export interface QuesQuizByIdAPIPayload extends QuesQuizByIdProps {}

  //Get Quiz No
  export type QuizNoProps ={}
  export type QuizNoResponse = {
    "count":number,
  }

  export interface QuizNoAPIPayload extends QuizNoProps {}


  //Question Attempt
  export type QuestionAttemptProps = {quizId: number | undefined,questionId: number |string | undefined};
  export type QuestionAttemptResponse = {
    
  };
  export type QuestionAttemptMutationPayload = {
    id: number |string | string[] | undefined;
  };
  export interface QuestionAttemptAPIPayload extends QuestionAttemptMutationPayload {}

}


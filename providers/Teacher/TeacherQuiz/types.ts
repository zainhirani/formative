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

  // Create
  export type CreateProps = {};
  export type CreateResponse = {
    token: string;
    data: Fields;
  };
  export type CreateMutationPayload = {
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
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }

  //Teacher Quiz Listing
  export type TeacherQuizListingProps = {};
  export type TeacherQuizListingResponse = {data:[],count:number}
  export interface TeacherQuizListingAPIPayload extends TeacherQuizListingProps {}

  //Courses Listing
  export type CourseListingProps = {};
  export type CourseListingResponse = []
  export interface CourseListingAPIPayload extends CourseListingProps {}
    
  //Folder Listing
  export type FolderListingProps = {};
  export type FolderListingResponse = []
  export interface FolderListingAPIPayload extends FolderListingProps {}
    
  //Scoring Listing
  export type ScoringListingProps = {};
  export type ScoringListingResponse = []
  export interface ScoringListingAPIPayload extends ScoringListingProps {}
    
  //Scoring By ID
  export type ScoringByIDProps = {id:number|null,scoringId:number|null};
  export type ScoringByIDResponse = {
    id: number|null,
    scheme: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    dynamicData: [
        {
            position: null,
            value: ""
        }
    ]
}
  export interface ScoringByIDAPIPayload extends ScoringByIDProps {}

  //Get Courses

  export type CoursesProps ={}
  export type CoursesResponse = {}

  export interface CoursesAPIPayload extends CoursesProps {}

  //Get Quiz By Id

  export type QuizByIdProps ={id: number | string | string[] | undefined,}
  export type QuizByIdResponse = {
    id: number,
    name: string,
    reviewable: boolean,
    status: string,
    timeLimitPerSec: number,
    duration: number,
    start_time: string,
    end_time: string,
    folderId:number,
    courseId:number,
    scoringId:number,
    userId:number,
    createdAt: string,
    updatedAt: string,
    deletedAt: null,
    questions: [
    ],
    scoring: {
        id: number,
        scheme: string
    },
    folders: {
        id: number,
        name: string
    },
    student: [],
    courses: {
        id: number,
        course_name: string
    }
}

  export interface QuizByIdAPIPayload extends QuizByIdProps {}

  //Get Quiz No

  export type QuizNoProps ={}
  export type QuizNoResponse = {
    "count":number,
  }

  export interface QuizNoAPIPayload extends QuizNoProps {}


  //Get User

  export type QuizProps ={}
  export type QuizResponse = {
    id:number,
    email:string,
    name:string,
    username:string,
    phone:number | string | null,
    type:'ADMIN' | 'STUDENT',
    status:string,
    profilePictureId: string | null,
    first_name:string,
    last_name:string,
    program:string
  }

  export interface QuizAPIPayload extends QuizProps {}

  // Detail
  export type DetailProps = {
    id:number
  }
  export type DetailResponse = {
    id: number;
    course_name: string;
    active: boolean;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
    course?: string | null;
  }
  export interface DetailAPIPayload extends DetailProps {}

  //Update
  export type UpdateProps = {
    id:number,
  }
  export type UpdateResponse = {
    data:boolean
  }
  export type UpdateMutationPayload = {
    quiz_name:string
  }
  export interface UpdateAPIPayload extends UpdateProps {
    data:UpdateMutationPayload
  }

  //Quiz Distribute
  export type QuizDistributeProps = {id: number|undefined,  studentsId:[]|undefined};
  export type QuizDistributeResponse = {
   studentsId:[]|undefined
  }
  export type QuizDistributeMutationPayload = []
  export interface QuizDistributeAPIPayload extends QuizDistributeProps {
    studentsId: QuizDistributeMutationPayload
  }

}


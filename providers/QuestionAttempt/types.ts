export namespace QuestionAttempt {
export type Item = {
    score:number,
    trd_score:number,
    submission_duration:number,
    question:{
        id:number,
        title:string,
        detail:string,
        media?:string ,
        option:string,
        answer:string
    }
}

//student attemp question listing

export type StudentListingProps = {
    quizId:string,
    userId?:string
}
export type StudentListingResponse = Item[]
export interface StudentListingAPIPayload extends StudentListingProps {}


// attempt question listinf

export type ListingProps = {
    questionId:string 
}
export type ListingResponse = {
    optionStatistics:{}
    averageAttempts:string,
    averageTime:string,
    averageScore:string,
    difficulty:string,
    question:{
        id:number,
        title:string,
        detail:string,
        media?:string ,
        option:string,
        answer:string
    }

}
export interface ListingAPIPayload extends ListingProps {}

}
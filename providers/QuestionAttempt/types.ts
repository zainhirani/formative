export namespace QuestionAttempt {
export type Item = {
    score:number,
    trd_score:number,
    submission_duration:number,
    question:{
        id:number,
        title:string,
        detail:string,
        media?:string | null,
        options:string,
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
}
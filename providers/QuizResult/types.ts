export namespace QuizResult {
    export type Item = {
        id:number,
        score:number,
        tradition:number,
        total_time:number,
        quizId:number,
        createdAt:string | Date,
    }

      //Listing
  export type ListingProps = {};
  export type ListingResponse = [Item]
  export interface ListingAPIPayload extends ListingProps {}

    // Detail
    export type DetailProps = {
      id?:number
    }
    export type DetailResponse = {
      id:number,
      score:number,
      tradition:number,
      total_time:number,
      quizId:number,
      createdAt:string | Date,
    }
    export interface DetailAPIPayload extends DetailProps {}
}
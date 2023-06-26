export namespace Question {
  export type Item = {
    id: number;
    title: string;
    detail: string;
    option: string;
    timelimit: number;
    media: string;
    attempted: boolean;
    correct: boolean;
  };

  //Listing
  export type ListingProps = {
    id: number;
  };
  export type ListingResponse = Item[];
  export interface ListingAPIPayload extends ListingProps {}
}

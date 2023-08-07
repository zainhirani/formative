// export interface Quiz_Withdraw {}

import { type } from "os";

export namespace Withdraw {
  export type Question = {
    id: number;
    title: string;
    revision: number;
    detail: string;
    option: string;
    answer: string;
    isPublic: boolean;
    type: string;
    status: string;
    timelimit: number;
    tries: number;
    attempt: any;
    acceptable_ans: any;
    media: any;
    categoryId: number;
    folderId: number;
    userId: number;
    shown: number;
    difficulty: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    revisionParentId: number;
  };

  export type withdrawProps = {};
  export type withdrawResponse = {
    id: number;
    name: string;
    reviewable: true;
    status: string;
    timeLimitPerSec: number;
    duration: number;
    start_time: string;
    end_time: string;
    folderId: number;
    courseId: number;
    scoringId: number;
    userId: number;
    score: number;
    true_score: number;
    std_completed: number;
    difficulty: number;
    std_difficulty: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    questions: Question[];
  };
  export type withdrawAPIMutationPayload = {
    id: number;
  };
  export interface withdrawAPIPayload extends withdrawProps {
    data: withdrawAPIMutationPayload;
  }
}

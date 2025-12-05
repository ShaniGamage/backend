export class PostDto {
    userId?: string;
    postType:string;
    description:string;
    anonymous?: boolean;
    image?: string;
    createdAt:Date;

}

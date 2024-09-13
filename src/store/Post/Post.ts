interface IPostImage {
    url: string;
    altText?: string; // Văn bản thay thế cho hình ảnh (không bắt buộc)
}
export interface IPost {
    PostID: string
    PostContent: string
    PostImage: IPostImage[],
    PostDateTime: string
    UserID: string
}
export class Title {
    titleId!: number;
    titleName!: string;
    posterThumbnailUrl!: string;
    posterUrl!: string;
    constructor(titleId: number,
        titleName: string,
        posterUrl: string,
        posterThumbnailUrl: string) {
        this.titleId = titleId;
        this.titleName = titleName;
        this.posterUrl = posterUrl;
        this.posterThumbnailUrl = posterThumbnailUrl;
    }
}
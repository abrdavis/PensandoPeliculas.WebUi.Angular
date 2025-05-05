export class Genre {
    genreId!: number;
    genreName!: string;

  
    constrcutor(genreId: number,
        genreName: string
 ) {
        this.genreName = genreName;
        this.genreId = genreId;

    }
  }
  
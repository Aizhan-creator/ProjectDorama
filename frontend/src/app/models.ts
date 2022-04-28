export interface AuthToken{
  // tslint:disable-next-line:variable-name
  token: string;
}

export interface Comment {
  id: number;
  body: string;
  user: any;
  dorama: number;
}

export interface Film {
  name: string;
  mark: number;
  photo: string;
  year: number;
}

export interface dorama {
  id: number;
  genres: any[];
  name: string;
  episodes: number;
  mark: number;
  photo: string;
  year: number;
  title_name: string;
  description: string;
  duration: number;
  comments: Comment[];
}

export interface Filter {
  yearFrom: number;
  yearTo: number;
  genres: string[];
  orderBy: string;
}

// Data from AniList

export const doramaQuery = `
query ($id: Int)
  {
    Media(id: $id, type: dorama) {
      id
      title {
        english

        romaji
        native
      }
      averageScore
      startDate {
        day, month, year
      }
      endDate {
        day, month, year
      }
      genres
      description
      coverImage {
        large
        medium
      }
      episodes, duration, isAdult
    }

  }
`;

export const doramaNameQuery = `
query ($doramaName: String)
  {
    Media(search: $doramaName, type: dorama) {
      id
      title {
        english
        romaji
        native
      }
      averageScore
      startDate {
        day, month, year
      }
      endDate {
        day, month, year
      }
      genres
      description
      coverImage {
        large
        medium
      }
      episodes, duration, isAdult
    }
  }
`;

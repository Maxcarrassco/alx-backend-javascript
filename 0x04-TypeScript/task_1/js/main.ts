interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [name: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

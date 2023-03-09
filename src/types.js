// @flow

export type Dateish = Date | string | { season?: string, year: number }

export type TimePeriod = Dateish | { start: Dateish, end: Dateish }

export type SectionListEntry = {
  key: string,
  title: string,
  type?: string,
}

export type GenericEntry = {
  title?: string,
  location?: string,
  timePeriods?: Array<TimePeriod>,
  description?: string | Array<string>,
}

export type EducationEntry = {
  school: string,
  degrees: Array<string>,
  gpa?: number,
  timePeriods?: Array<TimePeriod>,
}

export type ResumeData = {
  name: string,
  address: {
    street?: string,
    city: string,
    state: string,
    zip?: string,
  },
  email: string,
  website?: ?string,
  phone: string,
  sections: Array<SectionListEntry>,
  education: Array<EducationEntry>,
  tools: Array<string>,
  [key: string]: Array<GenericEntry>,
}

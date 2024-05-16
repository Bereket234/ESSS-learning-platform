export type cardData = {
  key: string;
  part: string;
  title: string;
};

export type moduleCard = {
  key: string;
  title: string;
  description: string;
};

export type moduleType = {
  key: string;
  part: string;
  title: string;
  description: string;
};

export type subCourseType = {
  key: string;
  part: string;
  title: string;
  modules: moduleType[];
};

export type subCourseTypeNoPart = {
  key: string;
  part: string;
  title: string;
  modules: moduleCard[];
}

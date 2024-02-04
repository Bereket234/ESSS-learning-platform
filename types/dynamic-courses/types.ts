export type cardData = {
  src: string;
  vidLength: string;
  part: string;
  title: string;
  status: "In Progress" | "Not Started" | "Completed";
};
export type coursesDataProps = {
  coursesData: Array<{
    id: number;
    title: string;
    description: string;
  }>;
};
export type CourseButtonProps = {
  style: string;
  innerText: string;
};

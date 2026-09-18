interface Course {
  courseName: string;
  durationHours: number;
  students: string[];
}

class OnlineCourse implements Course {
  public students: string[] = [];

  constructor(
    public courseName: string,
    public durationHours: number
  ) {}

  registerStudent(student: string): void {
    if (!this.isStudentRegistered(student)) {
      this.students.push(student);
      console.log(`Студента ${student} зареєстровано на курс "${this.courseName}".`);
    } else {
      console.log(`Студент ${student} вже є на курсі "${this.courseName}".`);
    }
  }

  isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

class CourseManager {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  removeCourse(courseName: string): void {
    this.courses = this.courses.filter(c => c.courseName !== courseName);
  }

  findCourse(courseName: string): Course | undefined {
    return this.courses.find(c => c.courseName.toLowerCase() === courseName.toLowerCase());
  }

  listCourses(): void {
    this.courses.forEach(c => {
      console.log(`Курс: ${c.courseName} (${c.durationHours} год.), Студенти: [${c.students.join(", ")}]`);
    });
  }
}

const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript Basics", 30);
const reactCourse = new OnlineCourse("React Architecture", 45);

manager.addCourse(tsCourse);
manager.addCourse(reactCourse);

tsCourse.registerStudent("Дмитро");
tsCourse.registerStudent("Аліна");
reactCourse.registerStudent("Дмитро");

manager.listCourses();
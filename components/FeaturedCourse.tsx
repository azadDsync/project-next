import SubjectCard from "./SubjectCard";
import Image from "next/image";



const courses = [
  {
    id: "1",
    title: "Mathematics",
    grade: "Grade 7",
    image: "/img/bp2.svg",
    description:
      "Get course completion certificate and prizes for 7 grade students participate now.",
  },
  {
    id: "2",
    title: "Science",
    grade: "Grade 7",
    image: "/img/bp3.svg",
    description:
      "Get course completion certificate and prizes for 7 grade students participate now.",
  },
  // Add more courses here...
];
interface courseSchema {
  id?:string;
  title?:string;
  grade?:string;
  image?:string;
  description?:string;
}

const FeaturedCourses = () => {
  return (
    <section className="bg-black ">
      <div
        // bg-left-bottom bg-center
        className=" mx-auto text-center  bg-white bg-no-repeat  bg-custom-bg fit"
        style={{
          backgroundImage: `url('/bg/b1.svg')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      >
        <div className="flex flex-col items-center sm:flex-row  p-12">
          <div className="w-56 ">
            <Image
              src="/img/bp1.svg"
              alt="image"
              width={279}
              height={279}
            />
          </div>
          <div className="flex flex-col ml-10 items-start">
            <h2 className="text-3xl font-bold mb-3 ">
              Summer bummer vacations
            </h2>
            <p className="text-gray-600 mb-10">
              Some recent classes and webinars near your location.
            </p>
            <button className="bg-[#17A8FC] text-white rounded-lg shadow-lg hover:bg-blue-600 sm:px-6 py-4  ">
              Learn Mathematics with best Teachers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {courses.map((course, index) => {
            return <SubjectCard key={index} title ={course.title} description={course.description} grade={course.grade} image={course.image }></SubjectCard>;
          })}
     
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

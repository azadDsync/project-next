import SubjectCard from "./SubjectCard";

const courses = [
  {
    title: "Mathematics",
    grade: "Grade 7",
    image: "/images/mathematics.png",
    description:
      "Get course completion certificate and prizes for 7 grade students participate now.",
  },
  {
    title: "Science",
    grade: "Grade 7",
    image: "/images/science.png",
    description:
      "Get course completion certificate and prizes for 7 grade students participate now.",
  },
  // Add more courses here...
];


const FeaturedCourses = () => {
  return (
    <section className="bg-black m-8">
      <div
        className=" mx-auto text-center bg-left-bottom bg-center bg-white bg-no-repeat py-12 my-10 p-16 bg-custom-bg fit"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      >
        <div className="flex p-12">
          <div className="w-56 ">
            <img src="/images/trophy.png" alt="image" />
          </div>
          <div className="flex flex-col ml-10 items-start">
            <h2 className="text-3xl font-bold mb-3 ">
              Summer bummer vacations
            </h2>
            <p className="text-gray-600 mb-10">
              Some recent classes and webinars near your location.
            </p>
            <button className="bg-[#17A8FC] text-white px-6 py-4 rounded-lg shadow-lg hover:bg-blue-600 mb-10">
              Learn Mathematics with best Teachers
            </button>
          </div>
        </div>
      
        
        <div className="grid grid-cols-1 md:grid-cols-2 py-3  gap-5 ">
          {/* {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex gap-6 hover:shadow-2xl"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-48 h-48 mb-4"
              />
              <div className=" flex flex-col items-start py-4">
                <div className="flex flex-wrap justify-between w-full">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-gray-600">{course.grade}</p>
                </div>
                <p className="mt-2  ">{course.description}</p>
                <button className=" w-[24rem] h-[2.5rem]  text-white font-normal font-inter bg-[#17A8FC] hover:bg-[#49b6f6]  border-[#113448] rounded-lg ">
                  Learn Mathematics with best Teachers
                </button>
              </div>
            </div>
          ))} */}
          
          {courses.map((course,index)=>{
            return <SubjectCard props={course} ></SubjectCard>
          })}
        </div>
       
        
       
      </div>
    </section>
  );
};

export default FeaturedCourses;

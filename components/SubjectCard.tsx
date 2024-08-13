interface courseSchema {
  title?: string;
  grade?: string;
  image?: string;
  description?: string;
}
import Image from "next/image";

const SubjectCard = ({ title, description, grade, image }: courseSchema) => {
  return (
    <div>
      <div className=" flex-col sm:flex-row flex items-center justify-center m-5 bg-[#FFFFFF] border-[0.15rem] border-solid border-[#E4E4E4] rounded-2xl  hover:shadow-2xl">
        <div className="hideen sm:h-[10rem] w-[1rem] bg-[#17A8FC] rounded-r-2xl"></div>
        <div className="p-2">
          <Image src={image as string} alt="My-Icon" width={279} height={279} />
        </div>
        <div className="p-1 flex-cols">
          <div className="py-5">
            <button
              type="button"
              className="flex items-center w-[8rem] h-[1.75rem]  text-white text-[0.75rem] font-inter bg-[#17A8FC] hover:bg-[#49b6f6]  border-[#113448] rounded-3xl "
            >
              <Image
                src="/vector/v1.svg"
                alt=""
                className="p-2"
                width={30}
                height={30}
              />
              Handicapped
            </button>
            <div className="flex justify-between">
              <h1 className=" p-1 font-inter font-bold text-2xl">{title}</h1>
              <h1 className=" p-1 font-inter font-medium text-1xl text-[#03203199]">
                {grade}
              </h1>
            </div>
            <h6 className="font-inter font-medium">
              {description}
            </h6>
          </div>
          <div className="flex py-5">
          <button
            type="button"
            className=" h-[3rem] sm:h-[2.5rem] w-auto p-1   text-white font-normal font-inter bg-[#17A8FC] hover:bg-[#49b6f6]  border-[#113448] rounded-lg "
          >
            Learn Mathematics with best Teachers
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubjectCard;

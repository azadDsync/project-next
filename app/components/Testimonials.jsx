import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="p-10 mx-56 font-bold">
      What our customers say?
      </div>
      <div
      className="flex "
      style={{
        backgroundColor: "white ",
        color: "white",
        // padding: "20px",
        borderColor: "black",
        borderRadius: "0.75rem",
        maxWidth: "700px",
        margin: "auto",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "60px", left: "-60px" }}>
        <Image
          src="/vector/Mask.svg"
          alt="Person Icon"
          width={120}
          height={60}
          style={{ borderRadius: "50%" ,backgroundColor:"#10294C"}}
        />
      </div>
      <div>
        <div style={{ marginLeft: "80px" }}>
          <div className="flex justify-between">
            <div className="flex items-end">
              <Image
                src="/icons/test.svg"
                alt="Person Icon"
                width={20}
                height={0}
              />
            </div>
            <span
              className="p-3 mb-3"
              style={{ color: "gold", marginRight: "5px" }}
            >
              ★★★★★
            </span>
          </div>
          <p className="text-black pl-4">
            I am proud to say that after a few months of taking this course... I
            passed my exam and am now an AWS Certified Cloud Practitioner! This
            content was exactly what the CCP exam covered.
          </p>
          <div>
            <p className="text-black p-10 font-bold">- Nia Kyle</p>
          </div>
        </div>
      </div>
      <div className="h-50 w-40 bg-[#17A8FC] rounded-r-xl flex items-center justify-center">
        {" "}
        <Image
          src="/icons/Vector.svg"
          alt="Person Icon"
          width={25}
          height={20}
        />
      </div>
    </div>
    </div>
  );
};

export default Testimonial;

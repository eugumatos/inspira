import { DM_Sans } from "next/font/google";
import { DotLoader } from "react-spinners";

import { Checked } from "../icons/Checked";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

type Step3FormProps = {
  completed?: boolean;
};

export const Step3Form = ({ completed = false }: Step3FormProps) => {
  return (
    <div className="my-8 flex flex-col gap-8">
      <h2 className="text-center text-xl">
        Your project has been sent for <br /> validation. Wait a few seconds to{" "}
        <br /> find out the status...
      </h2>

      <div className="my-16 flex items-center justify-center">
        {completed ? <Checked /> : <DotLoader color="#E98A15" size={50} />}
      </div>

      {completed ? (
        <>
          <div
            className={`mx-auto mb-8 w-full max-w-[80%] text-center text-base font-light ${dm.className}`}
          >
            It is now available for potential funders who share these values. We{" "}
            <br />
            are excited about the positive impact your idea can create! <br />{" "}
            <strong>Wait for approval</strong> from the curatorship of our
            investors.
          </div>
          <span
            className={`mx-auto text-base font-bold text-[#E98A15] ${dm.className}`}
          >
            You will receive an email
          </span>
        </>
      ) : (
        <div className={`mb-8 text-center text-sm font-bold ${dm.className}`}>
          Our Inpira AI is validating the necessary <br /> requirements for
          approval
        </div>
      )}
    </div>
  );
};

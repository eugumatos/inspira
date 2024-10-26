import { DM_Sans } from "next/font/google";
import { Pig } from "../icons/Pig";
import { Coin } from "../icons/Coin";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const Step2Form = () => {
  const [selectFundOption, setSelectFundOption] = useState(0);

  const { register } = useFormContext();

  const backgroundFundOption = (option: number) =>
    selectFundOption === option
      ? "border-orange-300 bg-[#FFA743]"
      : "border-gray-200 bg-gray-200";

  return (
    <div className="my-8 flex flex-col gap-8">
      <div>
        <h2 className={`mb-2 font-bold ${dm.className}`}>
          More about your project
        </h2>

        <div>
          <label htmlFor="description" className={`${dm.className} text-sm`}>
            Description
          </label>

          <textarea
            id="message"
            rows={5}
            className="shadow-input mt-5 block w-full resize-none rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
            placeholder="Write your thoughts here..."
            {...register("message")}
          ></textarea>
        </div>
      </div>

      <div>
        <h2 className={`font-bold ${dm.className}`}>Funding model</h2>

        <div>
          <label
            htmlFor="description"
            className={`${dm.className} text-sm text-gray-500`}
          >
            Please choose only one option
          </label>

          <div className="mt-8 flex gap-5">
            <div
              className={`flex cursor-pointer gap-5 rounded-lg border ${backgroundFundOption(0)}  p-5`}
              onClick={() => setSelectFundOption(0)}
            >
              <Pig />

              <p
                className={`${dm.className} text-[1rem] font-light text-white`}
              >
                Whether it will start <br /> only after securing <br /> the full
                amount
              </p>
            </div>

            <div
              className={`flex cursor-pointer gap-5 rounded-lg border ${backgroundFundOption(1)} p-5`}
              onClick={() => setSelectFundOption(1)}
            >
              <Coin />

              <p
                className={`${dm.className} text-[1rem] font-light text-white`}
              >
                Whether it will use <br /> the available funds <br /> as they
                are raised.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="budget" className={`${dm.className} text-sm`}>
              Budget
            </label>
            <input
              id="budget"
              type="number"
              placeholder="$5.000.00"
              className="g-gray-50 shadow-input mt-2 block w-full max-w-[15%] rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
              {...register("budget")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

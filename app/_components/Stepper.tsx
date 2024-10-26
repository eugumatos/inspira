import { DM_Sans } from "next/font/google";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Step1Form } from "./forms/step_1";
import { Step2Form } from "./forms/step_2";
import { Step3Form } from "./forms/step_3";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

export const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formCompleted, setFormCompleted] = useState(false);

  const formStepper = useForm();

  const totalSteps = 3;
  const isSubmit = currentStep === 2;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: any) => {
    const isValid = await formStepper.trigger();

    if (isValid) {
      handleNext();

      new Promise<void>((resolve) => {
        setTimeout(() => {
          setFormCompleted(true);
          resolve();
        }, 5000);
      });
    }
  };

  return (
    <FormProvider {...formStepper}>
      <div className="shadow-stepper w-full max-w-[60%] rounded-2xl bg-[#FBFBFB] p-10">
        <ol className="flex items-center justify-center space-x-10 text-gray-500 dark:text-gray-400">
          {[...Array(totalSteps)].map((_, index) => {
            const step = index + 1;
            const isCompleted = step < currentStep || formCompleted;
            const isActive = step === currentStep;
            return (
              <li key={step} className="relative flex flex-col items-center">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-gray-400 ring-4 ring-white ${
                    isCompleted
                      ? "bg-[#FFA743] text-white"
                      : isActive
                        ? "bg-orange-200"
                        : "bg-gray-200"
                  }`}
                >
                  {step}
                </span>
                <div className="px-8"></div>
                {step < totalSteps && (
                  <div className="absolute right-[-2.5rem] top-4 h-0.5 w-10 bg-gray-300 dark:bg-gray-600"></div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-8 w-[70%] border border-slate-200"></div>

        {currentStep === 1 && <Step1Form />}
        {currentStep === 2 && <Step2Form />}
        {currentStep === 3 && <Step3Form completed={formCompleted} />}

        {currentStep < totalSteps && (
          <div className="mt-4 flex justify-between">
            {currentStep !== 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="rounded-full bg-gray-300 px-10 py-2.5 text-center text-sm font-bold text-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Previous step
              </button>
            ) : (
              <div />
            )}

            <button
              type={isSubmit ? "submit" : "button"}
              onClick={isSubmit ? onSubmit : handleNext}
              className={`${dm.className} items-end rounded-full bg-[#E98A15] px-10 py-2.5 text-center text-sm font-bold  text-white hover:bg-orange-300 focus:outline-none focus:ring-4 focus:ring-blue-300`}
            >
              {isSubmit ? "Submit" : "Next Step"}
            </button>
          </div>
        )}
      </div>
    </FormProvider>
  );
};

import { DM_Sans } from "next/font/google";
import { useFormContext } from "react-hook-form";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const Step1Form = () => {
  const { register } = useFormContext();

  return (
    <div className="mt-8">
      <h2 className={`mb-4 font-bold ${dm.className}`}>Personal data</h2>

      <div className="flex justify-between gap-5">
        <div className="mb-4 flex-1">
          <label htmlFor="name" className={`${dm.className} text-sm`}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jonh Carter"
            className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
            {...register("name")}
          />
        </div>

        <div className="mb-4 flex-1">
          <label htmlFor="dob" className={`${dm.className} text-sm`}>
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            placeholder="01/01/1990"
            className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-500 focus:border-orange-300 focus:ring-orange-300"
            {...register("birth")}
          />
        </div>

        <div className="mb-4 flex-1">
          <label htmlFor="phone" className={`${dm.className} text-sm`}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(123) 456 - 7890"
            className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
            {...register("phone")}
          />
        </div>
      </div>

      <div className="flex gap-5">
        <div className="mb-4">
          <label htmlFor="document" className={`${dm.className} text-sm`}>
            Document number
          </label>
          <input
            id="document"
            type="number"
            placeholder="123456789"
            className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
            {...register("document")}
          />
        </div>

        <div className="mb-4 flex-1">
          <label htmlFor="email" className={`${dm.className} text-sm`}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
            {...register("email")}
          />
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <div className="mb-4 flex-1">
          <label htmlFor="address" className={`${dm.className} text-sm`}>
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="3150 Roswell Rd"
            className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
            {...register("address")}
          />
        </div>

        <div className="mb-4 flex-1">
          <label htmlFor="city" className={`${dm.className} text-sm`}>
            City/State
          </label>
          <input
            id="city"
            type="text"
            placeholder="Atlanta, Géorgia"
            className="g-gray-50 shadow-input block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
            {...register("city")}
          />
        </div>

        <div className="mb-4 flex-1">
          <label htmlFor="country" className={`${dm.className} text-sm`}>
            Country
          </label>
          <select
            id="country"
            className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-500 focus:border-orange-300 focus:ring-orange-300"
            {...register("country")}
          >
            <option value="us" disabled selected>
              United States
            </option>
            <option value="ca">Canada</option>
            <option value="br">Brazil</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="jp">Japan</option>
            <option value="in">India</option>
            <option value="au">Australia</option>
            <option value="za">South Africa</option>
            <option value="cn">China</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
      </div>

      {/* New Project Section */}
      <div className="mt-8">
        <h2 className={`mb-4 font-bold ${dm.className}`}>Your Project</h2>

        <div className="flex max-w-[70%] gap-5">
          <div className="mb-4 flex-1">
            <label htmlFor="projectName" className={`${dm.className} text-sm`}>
              Project Name
            </label>
            <input
              id="projectName"
              type="text"
              placeholder="Enjoy the life"
              className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
              {...register("projectName")}
            />
          </div>

          <div className="mb-4 flex-1">
            <label htmlFor="category" className={`${dm.className} text-sm`}>
              Category
            </label>
            <select
              id="category"
              className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-500 focus:border-orange-300 focus:ring-orange-300"
              {...register("category")}
            >
              <option value="theater_dance" disabled selected>
                Theater and Dance
              </option>
              <option value="music">Music</option>
              <option value="visual_arts">Visual Arts</option>
              <option value="film">Film</option>
              <option value="literature">Literature</option>
              <option value="photography">Photography</option>
              <option value="sculpture">Sculpture</option>
              <option value="comedy">Comedy</option>
              <option value="fashion">Fashion</option>
              <option value="animation">Animation</option>
              <option value="architecture">Architecture</option>
              <option value="digital_arts">Digital Arts</option>
              <option value="museum_exhibits">Museum Exhibits</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between gap-5">
          <div className="mb-4 flex-1">
            <label htmlFor="place" className={`${dm.className} text-sm`}>
              Where your project take a place?
            </label>
            <input
              id="place"
              type="text"
              placeholder="If it occurs in more than one location, a tip is to include the city where your network of potential supporters is largest."
              className="g-gray-50 shadow-input mt-2 block w-full rounded-full border-none border-gray-300 p-4 ps-4 text-sm text-gray-900 focus:border-orange-300 focus:ring-orange-300"
              {...register("place")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

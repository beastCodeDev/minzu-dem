const PersonalInfo = () => {
  return (
    <>
      <nav>personalInformation</nav>
      <br />
      <br />
      <main>
        <div className="flex justify-around">
          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              email:
            </label>
            <input
              className="bg-gray-300 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="email"
            />
            <br />
            <div className="mt-32">
              <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                push notification
              </label>
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
              />
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              nickname:
            </label>
            <input
              className="bg-gray-300 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
        </div>
      </main>
      <div className="ml-28">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Save
        </button>
      </div>
    </>
  );
};
export default PersonalInfo;

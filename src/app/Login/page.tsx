"use client";

export default function Login() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center mt-20 sm:mt-24">
                NEWS
            </h2>
            <h1 className="flex flex-col justify-center items-center my-8 sm:my-10">
                <div className="border w-[85vw] sm:w-[65vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-[50vh] md:h-[55vh] flex flex-col items-center rounded-xl p-5 shadow-lg dark:shadow-2xl">
                    <div className="my-5">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg text-black dark:text-white mt-5
                             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-center"
                        />
                    </div>
                    <div className="my-5">
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg text-black dark:text-white
                            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-center"
                        />
                    </div>
                    <button 
                        className="border w-60 h-12 md:h-20 justify-center items-center flex rounded-xl text-lg md:text-2xl my-2 hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black transition"
                        onClick={() => alert('Log in clicked!')}>
                        Log in
                    </button>
                    <button 
                        className="w-40 md:w-60 h-12 md:h-16 justify-center items-center flex my-5 text-sm md:text-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition"
                        onClick={() => alert('Forgotten password clicked!')}>
                        Forgotten password
                    </button>

                    <p className="text-sm md:text-lg dark:text-white">or</p>

                    <button 
                        className="border w-40 md:w-60 h-12 md:h-16 justify-center items-center flex rounded-lg my-5 text-lg md:text-2xl hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition"
                        onClick={() => alert('Register clicked!')}>
                        Register 
                    </button>
                </div>
            </h1>
        </div>
    );
}

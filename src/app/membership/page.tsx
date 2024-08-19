"use client"

export default function Membership() {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition duration-500 min-h-screen">
            <h2 className="text-7xl flex justify-center items-center">
                <p className="mt-10">NEWS</p>
            </h2>

            <div className="flex justify-center items-center my-10 w-full">
                <div className="w-[70vw] flex justify-between bg-white dark:bg-gray-800">
                    <div className="border border-gray-300 dark:border-gray-600 w-96 h-[70vh] flex flex-col justify-start rounded-lg my-20 mx-5 shadow-lg dark:shadow-2xl">
                        <p className="font-semibold text-xl mt-5 text-center">New Member</p>
                        <div className="flex justify-center items-center flex-grow">
                            <p>New member content</p>
                        </div>
                    </div>
                    <div className="border border-gray-300 dark:border-gray-600 w-96 h-[70vh] flex flex-col justify-start rounded-lg my-14 mx-5 shadow-lg dark:shadow-2xl">
                        <p className="font-semibold text-xl mt-5 text-center">Standar</p>
                        <div className="flex justify-center items-center flex-grow">
                            <p>Standar content</p>
                        </div>
                    </div>
                    <div className="border border-gray-300 dark:border-gray-600 w-96 h-[70vh] flex flex-col justify-start rounded-lg my-20 mx-5 shadow-lg dark:shadow-2xl">
                        <p className="font-semibold text-xl mt-5 text-center">Profesional</p>
                        <div className="flex flex-col justify-center items-center flex-grow">
                            <p>promo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

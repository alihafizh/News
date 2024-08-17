"use client"

export default function Membership() {
    return (
        <div className="dark:text-white transition duration-500">
            <h2 className="text-7xl flex justify-center items-center mt-20">
                NEWS
            </h2>

            <h1 className="flex justify-center items-center my-10">
                <div className="border w-[70vw] flex justify-between">
                    <div>
                        <div className="border w-96 h-[70vh] justify-center items-center
                            flex rounded-lg my-20 mx-5 shadow-lg dark:shadow-gray-700 bg-white dark:bg-gray-800">
                            <p>new member</p>
                        </div>
                    </div>
                    <div>
                        <div className="border w-96 h-[70vh] justify-center items-center
                            flex rounded-lg my-14 mx-5 shadow-lg dark:shadow-gray-700 bg-white dark:bg-gray-800">
                            <p>Standar</p>
                        </div>
                    </div>

                    <div>
                        <div className="border w-96 h-[70vh] justify-center items-center 
                            flex flex-col rounded-lg my-20 mx-5 shadow-lg dark:shadow-gray-700 bg-white dark:bg-gray-800">
                            <p className="font-semibold text-xl">Profesional</p>
                            <div>promo</div>
                            <div>promo</div>
                            <div>promo</div>
                            <div>promo</div>
                            <div>promo</div>
                            <div>promo</div>
                            <div>promo</div>
                            <div>promo</div>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}

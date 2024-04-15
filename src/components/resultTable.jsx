import React, {useEffect, useState} from "react";
import {getServerData} from "../helper/helper";

export default function ResultTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getServerData(`https://backend-quiz.csiinnowave.com/api/result`, (res) => {
            const sortedData = res.sort((a, b) => {
                if (a.points !== b.points) {
                    return b.points - a.points;
                } else {
                    return new Date(a.time) - new Date(b.time);
                }
            });
            setData(sortedData);
        });
    }, []);

    return (
        <div>
            <div className="grid gap-4">
                {/* Displaying top three users */}
                {data.map((user, index) => (
                    <div key={index}
                         className="rounded-full p-6 flex justify-between items-center gradient-background bg-gradient-to-r from-[#5170ff] to-[#ff66c4]">

                        <div
                            className="bg-black text-transparent w-16 h-16 rounded-full flex justify-center items-center">
                            <div className="text-4xl text-blue-400 font-bold mb-2">{index + 1}</div>
                        </div>

                        <div className="font-bold text-3xl uppercase">{user.username}</div>
                        {/* Display points */}
                        <div className="font-bold text-3xl">{user.points}</div>
                        {/* Display badges if available */}
                        {/* Rendering different badge images based on position */}
                        {index === 0 ? (
                            <img
                                src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713188066/CSI%20Website/Quiz/first-first-place-svgrepo-com_sfzjtx.svg"
                                alt="First Place Badge"
                                className="h-20 pr-5"
                            />
                        ) : index === 1 ? (
                            <img
                                src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713188243/CSI%20Website/Quiz/second-svgrepo-com_rsm8pz.svg"
                                alt="Second Place Badge"
                                className="h-20 pr-5"
                            />
                        ) : index === 2 ? (
                            <img
                                src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713188263/CSI%20Website/Quiz/third-svgrepo-com_zi0zqp.svg"
                                alt="Third Place Badge"
                                className="h-20 pr-5"
                            />
                        ) : (
                            <div className="w-32"></div>
                        )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

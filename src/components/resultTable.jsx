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
                         className="rounded-3xl p-3 flex justify-between items-center bg-slate-300">

                        <div
                            className="bg-black text-transparent w-16 h-16 rounded-2xl flex justify-center items-center">
                            <div className="text-4xl text-pink-500 font-bold font-pixelify mb-2">{index + 1}</div>
                        </div>

                        <div className="font-bold font-pixelify text-3xl uppercase">{user.username}</div>

                        <div className="font-bold font-pixelify text-3xl">{user.points}</div>

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

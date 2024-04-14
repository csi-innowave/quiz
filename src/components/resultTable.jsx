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
                         className="rounded-full p-6 flex justify-between items-center gradient-background bg-gradient-to-r from-blue-400 to-pink-400">

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
                                src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713120380/CSI%20Website/Quiz/6-removebg-preview_ur47rm.png"
                                alt="First Place Badge"
                                className="h-24 w-48"
                            />
                        ) : index === 1 ? (
                            <img
                                src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713120406/CSI%20Website/Quiz/7-removebg-preview_uy5epw.png"
                                alt="Second Place Badge"
                                className="h-24 w-48"
                            />
                        ) : index === 2 ? (
                            <img
                                src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713120434/CSI%20Website/Quiz/8-removebg-preview_fkycmw.png"
                                alt="Third Place Badge"
                                className="h-20 w-44"
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

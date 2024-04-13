import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

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
    <div className="text-white mt-10">
      <div class="relative overflow-y-scroll">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-scroll">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Rank
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Points Earned
              </th>
            </tr>
          </thead>
          <tbody>
            {!data.length ? (
              <tr>
                <td colspan="4">No Data Found</td>
              </tr>
            ) : (
              data.map((v, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td class="px-6 py-4">{i + 1}</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {v?.username || ""}
                  </th>
                  <td class="px-6 py-4">{v?.points || 0}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <h2 className="mt-20"></h2>
      </div>
    </div>
  );
}

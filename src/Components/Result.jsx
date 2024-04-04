import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Result = ({output}) => {
  const { data, isLoading } = useFetch("sample");

  const [found, setFound] = useState(false);

  const [attack, setAttack] = useState([]);

  const parameters = [
    "duration",
    "protocol_type",
    "service",
    "flag",
    "src_bytes",
    "dst_bytes",
    "urgent",
    "num_failed_logins",
    "serror_rate",
    "rerror_rate",
    "attack",
  ];

  //   attack_encoding = {0: 'DoS', 1: 'Probe', 2: 'R2L', 3: 'U2R', 4: 'normal'}

  return (
    <div className="flex justify-center items-center">
      <table border={4}>
        <thead>
          <tr>
            {parameters.map((x, _i) => {
              return (
                <th
                  className="p-2 border border-black text-center bg-black text-white"
                  key={_i}
                >
                  {x}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ind) => {
            return (
              <tr key={ind}>
                {row.map((x, _i) => {
                  return x == ("Probe" || "DoS" || "R2L" || "U2R") ? (
                    <td
                      key={_i}
                      className="border-black border text-center text-white bg-red-600"
                    >
                      {x}
                    </td>
                  ) : x == "normal" ? (
                    <td
                      key={_i}
                      className="border-black border text-center bg-green-700 text-white"
                    >
                      {x}
                    </td>
                  ) : (
                    <td
                      key={_i}
                      className="border-black border text-center bg-blue-400 text-black"
                    >
                      {x}
                    </td>
                  );
                  //   return (
                  // <td className="border-black border text-center" key={_i}>
                  //   {x}
                  // </td>
                  //   );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;

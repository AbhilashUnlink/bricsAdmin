import React, { useState } from "react";
import { columns } from "./columns";
import BricsTable from "../../components/brics-table/BricsTable";
import { useSelector } from "react-redux";

const Users = ({ newPage, userData }) => {
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const TableType = useSelector((store) => store?.tableType?.tableType);

  return (
    <>
      {userData.map(
        (data, index) =>
          // registered user will come from global state
          data?.type === TableType && (
            <BricsTable
              key={index}
            
              title={data.type}
              columns={columns}
              skip={skip}
              setSkip={setSkip}
              take={take}
              setTake={setTake}
              initialRowCount={take}
              newPage={newPage}
              users={data.users}
              userData={data}
            />
          )
      )}
    </>
  );
};

export default Users;

import React from 'react';



const useFilter = (data: [], key: string) => {
 const newData = data.filter(value => value.name.includes(key)
 )
 return newData;
};

export default useFilter;
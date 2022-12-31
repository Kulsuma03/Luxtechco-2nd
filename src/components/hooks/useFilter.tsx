import React, { useState } from 'react';

type Data<T> = {
    dataT : T
}
const useFilter = (data: Data<T>, key: string)=> {
    const newData = data?.filter((user) => user.name.toLowerCase().includes(key.toLowerCase()))
    
 return newData;
};

export default useFilter;
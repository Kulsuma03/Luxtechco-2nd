import React from 'react';

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {};
    phone: string;
    website: string;
    company: {};

}

const useFilter = (data: [], key: string) => {
 const newData = data.filter(value => value.name.includes(key)
 )
 return newData;
};

export default useFilter;
import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';
import { PodData } from '../interfaces/Pod.interface';
import { fetchPodData } from '../services/PodService';

const BottomSection: React.FC = () => {
    const [data, setData] = useState<PodData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('API call successful');
            const responseData = await fetchPodData();
            setData(responseData);
        };

        fetchData();
        const intervalId = setInterval(fetchData, 30000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="p-2">
            <div className="mx-3 text-[15px] font-semibold text-center text-[#0E97E6] border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2 border-b-2 border-[#0E97E6]">
                        <div className="inline-block p-4 tab-underline hover:border-[#0E97E6] border-b-2 border-transparent rounded-t-lg hover:text-[#0E97E6] dark:hover:text-gray-300">Ground Floor</div>
                    </li>
                </ul>
            </div>
            <div className='pt-4'>
                {data.map(item => (
                    <div className='p-2' key={item.podId}>
                        <InfoCard podData={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottomSection;

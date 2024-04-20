import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';
import axios from 'axios';
import { PodData } from '../interfaces/Pod.interface';

const BottomSection: React.FC = () => {
    const [data, setData] = useState<PodData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API got called successfully')
                const response = await axios.get<PodData[]>('https://mocki.io/v1/f959a23b-97c2-48d4-be0c-a030efa0a2e8');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
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
                    <div className='p-2'>
                        <InfoCard key={item.thingName} podData={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottomSection;

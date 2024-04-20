import React from 'react';
import pod from '../style/images/pod.svg'
import { PodData } from '../interfaces/Pod.interface';

const InfoCard: React.FC<{ podData: PodData }> = ({ podData }) => {
    const { nextAvailableIn,displayName, status } = podData;

    const getStatusColor = (status: string): string => {
        switch (status) {
            case 'AVAILABLE':
                return '#53A700';
            case 'OCCUPIED':
                return '#E7B22A';
            case 'UNDER_MAINTAINENCE':
                return '#BEBEBE';
            default:
                return '#000000';
        }
    };
    return (
        <div className="card-parent flex max-w-sm p-6 bg-white border border-[#E2E2E2] rounded-[10px] shadow">
            <img className="h-[56px] w-[65px] mr-4" src={pod} alt="pod" />
            <div>
                <p className="mb-2 font-semibold text-lg tracking-tight  text-[#2E2D2D]">{displayName}</p>
                <p className="font-bold text-xs" style={{ color: getStatusColor(status) }}>
                    {status === 'OCCUPIED' ? `NEXT AVAILABLE IN ${nextAvailableIn} MINS` : status}
                </p>
            </div>
        </div>
    );
};

export default InfoCard;

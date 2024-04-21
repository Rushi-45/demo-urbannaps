import axios from 'axios';
import { PodData } from '../interfaces/Pod.interface';

export const fetchPodData = async (): Promise<PodData[]> => {
    try {
        const response = await axios.get<{ data: PodData[] }>('https://dev.api.pods.urbannaps.com/api/pod/availability?organization_id=ea8602eb-b276-4e96-9dba-073a60d3de4f');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
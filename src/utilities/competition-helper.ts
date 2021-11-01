import {
    endTime,
    preEndTime,
    preStartTime,
    startTime,
} from '../constants/competition';
import { ScoreboardData } from '../types/competition';

export const isCompetition = (): boolean => {
    const now = new Date();
    return now > startTime && now < endTime;
};

export const isCompetitionOver = (): boolean => {
    const now = new Date();
    return now.getTime() > endTime.getTime();
};

export const isPreCompetition = (): boolean => {
    const now = new Date();
    return now > preStartTime && now < preEndTime;
};

export const sizeFormatter = (cell: any, row: ScoreboardData) => {
    switch (row.size) {
        case 'small':
            return 'Færri en 70';
        case 'medium':
            return '70-300';
        case 'large':
            return 'Meira en 300';
        default:
            return '';
    }
};

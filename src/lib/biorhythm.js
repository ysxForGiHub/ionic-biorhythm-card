import dayjs from 'dayjs'

export function calculateBiorhythms(birthDate, targetDate) {
    return {
        physical: calculateBiorhythm(birthDate, targetDate, 23),
        emotional: calculateBiorhythm(birthDate, targetDate, 28),
        intellectual: calculateBiorhythm(birthDate, targetDate, 33),
    }
}

function calculateBiorhythm(birthDate, targetDate, cycle) {
    const dateDiff = dayjs(targetDate).diff(dayjs(birthDate), 'day')
    return Math.sin(2 * Math.PI * dateDiff / cycle);
}

export function calculateBiorhythmsSeries(birthDate, centralDate, range) {
    const series = [];
    for (let i = -range; i <= range; i++) {
        const targetDate = dayjs(centralDate).add(i, 'day');
        const biorhythems = calculateBiorhythms(birthDate, targetDate);
        series.push({ date: targetDate.format('D MMM'), ...biorhythems })
    }
    return series;
}
import { calculateBiorhythms } from "./biorhythm";

it('calcuate the physical biorhythm', () => {
    const biorhythms = calculateBiorhythms('1999-12-31', '2022-12-31');

    expect(biorhythms.physical).toBe(0.9977)
})
const base = {
    gender: ['male', 'female'],
    region: ['서울', '경기', '인천', '대전', '충북', '충남', '강원', '부산', '경북', '경남', '대구', '울산', '광주', '전북', '전남', '제주'],
    birth: [],
    tall: [],
    shape: ['마른', '슬림탄탄', '보통', '건장한', '근육질', '통통한'],
    bloodType: ['A', 'B', 'O', 'AB'],
    smoking: ['흡연', '비흡연'],
    drinking: ['마시지 않음', '가끔 마심', '어느 정도 즐김', '술자리를 즐김'],
}

const baseSet = new Set(Object.keys(base));

export const profileConverter = profile => {
    return Object.keys(profile).reduce((acc, cur) => {
        if(baseSet.has(cur)) {
            const index = base[cur].indexOf(profile[cur]);
            if(index >= 0) {
                return {
                    ...acc,
                    [cur]: index,
                }
            } else {
                if(cur === 'birth') {
                    const birth = profile[cur].split('-');
                    return {
                        ...acc,
                        birthYear: parseInt(birth[0]),
                        birthMonth: parseInt(birth[1]),
                        brithDay: parseInt(birth[2]),
                    }
                } else {
                    return {
                        ...acc,
                        [cur]: parseInt(profile[cur]),
                    }
                }
            }
        }

        return {
            ...acc,
            [cur]: profile[cur],
        }
    }, {});
}
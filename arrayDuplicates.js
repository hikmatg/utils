const count = arr =>
    arr.reduce((a, b) =>
        Object.assign(a, { [b]: (a[b] || 0) + 1 }), {});

const duplicates = dict =>
    Object.keys(dict).filter((a) => dict[a] > 1);


// faster version

function findDuplicates(arr) {
    countArr = [];
    duplicates = [];

    arr.forEach(number => {
        if (!countArr[number]) {
            countArr[number] = { number: number, count: 1 };
        } else if (countArr[number].count === 1) {
            duplicates.push(number);
            countArr[number].count++;
        }
    });

    return duplicates;
}


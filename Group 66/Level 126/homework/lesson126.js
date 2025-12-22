// Element equals its index

function indexEqualsValue(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === mid) {
        result = mid;
        right = mid - 1; 
        } else if (arr[mid] < mid) {
        left = mid + 1; 
        } else {
        right = mid - 1;
        }
    }

    return result;
}



// Grouped by commas

function groupByCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


// Simple frequency sort

function solve(arr) {
    const freq = {};


    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }


    return arr.sort((a, b) => {
        if (freq[b] !== freq[a]) {
        return freq[b] - freq[a];
        }
        return a - b; 
    });
};




// Replace With Alphabet Position

function alphabetPosition(text) {
    return text
        .toLowerCase()
        .split('')
        .filter(ch => ch >= 'a' && ch <= 'z')
        .map(ch => ch.charCodeAt(0) - 96)
        .join(' ');
}



// Palindrome for your Dome

function palindrome(string) {
    const cleaned = string
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    return cleaned === cleaned.split('').reverse().join('');
}

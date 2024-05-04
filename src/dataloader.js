function sort_by_date(data) {
    const dateIndices = data.date.map((date, index) => ({ index, date: new Date(date) }))
        .sort((a, b) => a.date - b.date)
        .map(item => item.index);

    const sortedData = {};
    Object.keys(data).forEach(key => {
        sortedData[key] = dateIndices.map(index => data[key][index]);
    });
    return sortedData;
}

class DataLoader {
    constructor() {
        this.data = {
            age: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
            salary: [38496, 42000, 46752, 49320, 53200, 56000, 62316, 64928, 67317, 68748],
            experience: [1, 3, 5, 6, 8, 10, 12, 15, 20, 25],
            date: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05', '2020-01-06', '2020-01-07', '2020-01-08', '2020-01-09', '2020-01-10']
        };
    }

    get_data(date_start, date_end) {
        const data = sort_by_date(this.data);
        const start_index = data.date.indexOf(date_start);
        const end_index = data.date.indexOf(date_end);
        const filteredData = {};
        Object.keys(data).forEach(key => {
            filteredData[key] = data[key].slice(start_index, end_index + 1);
        });
        return filteredData;
    }

    add_data(new_data) {
        Object.keys(new_data).forEach(key => {
            this.data[key].push(new_data[key]);
        });
        this.data = sort_by_date(this.data);
    }
}


// Instantiate DataLoader
const loader = new DataLoader();

// Get data within a date range
const filteredData = loader.get_data('2020-01-07', '2020-01-08');

// Print the result
console.log(filteredData);

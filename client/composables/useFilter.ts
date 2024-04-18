const Usefilter = (data: any, selectedYear: string) => {
    let filterData = data._value.filter((launch: any) => launch.launch_year === selectedYear);
    return filterData;
};

export default Usefilter;
const sortLaunches = (data: any, sortOrder: string) => {
    let sortedLaunches = data._value.sort((a: any, b: any) => {
      if (sortOrder === 'asc') {
        //@ts-ignore
        return new Date(a.launch_date_utc) - new Date(b.launch_date_utc);
      } else if (sortOrder === 'desc') {
        //@ts-ignore
        return new Date(b.launch_date_utc) - new Date(a.launch_date_utc);
      }
    });
    return sortedLaunches
  };

  export default sortLaunches;
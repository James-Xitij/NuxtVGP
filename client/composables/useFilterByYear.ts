import { computed, ref } from 'vue';

const useFilterByYear = (launches: any) => {
  const years = computed(() => {
    const launchYears = launches.value.map((launch: any) => launch.launch_year);
    return Array.from(new Set(launchYears)).sort((a: any, b: any) => parseInt(b) - parseInt(a));
  });

  const selectedYear = ref('');

  const filteredLaunches = computed(() => {
    if (!selectedYear.value) return launches.value;
    return launches.value.filter((launch: any) => launch.launch_year === selectedYear.value);
  });

  return {
    years,
    selectedYear,
    filteredLaunches
  };
};

export default useFilterByYear;
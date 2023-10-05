import dynamic from 'next/dynamic';

const OrganizationalChart = dynamic(() => import('./organizational-chart'), {
  ssr: false,
});

export default OrganizationalChart;

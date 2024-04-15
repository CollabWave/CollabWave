'use client';

import { usePathname } from 'next/navigation';

import { influencers } from '@/mockData/influencers';

const InfluencerProfilePage = () => {
  const pathname = usePathname();

  const id = pathname.match(/\/([^\/]+)$/);
  const influencerToShow = influencers.find(inf => inf.id.toString() === id[1]);

  return <div>{influencerToShow.nickname}</div>;
};

export default InfluencerProfilePage;

'use client';

import { usePathname } from 'next/navigation';

const ProjectDescriptionPage = () => {
  const slug = usePathname();

  return <div style={{marginTop: "150px"}}>{slug}</div>;
};

export default ProjectDescriptionPage;

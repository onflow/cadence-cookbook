import Iconify from 'src/components/iconify';


export const navConfig = [
  {
    title: 'Recipes',
    path: '/pages',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'NFT Fundamentals',
        items: [
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
        ],
      },
      {
        subheader: 'Working With Fungible Tokens',
        items: [
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
        ],
      },
      {
        subheader: 'Getting Started With Access Management',
        items: [
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
        ],
      },
      {
        subheader: 'NFT Storefront Essentials',
        items: [
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
          { title: 'Lorem ipsum', path: "" },
        ],
      },
    ],
  },
];

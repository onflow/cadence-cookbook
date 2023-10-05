'use client';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _mock } from 'src/_mock';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  MegaMenuMobile,
  MegaMenuDesktopHorizon,
  MegaMenuDesktopVertical,
} from 'src/components/mega-menu';

// ----------------------------------------------------------------------

export default function MegaMenuView() {
  const menu = useBoolean();

  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Mega Menu"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Mega Menu' },
            ]}
          />
        </Container>
      </Box>

      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: (theme) => theme.customShadows.z8,
        }}
      >
        <Container sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu Horizon
          </Typography>

          <MegaMenuDesktopHorizon data={data} />
        </Container>
      </AppBar>

      <Container sx={{ my: 10 }}>
        <MegaMenuMobile
          data={data}
          open={menu.value}
          onOpen={menu.onTrue}
          onClose={menu.onFalse}
          action={
            <Button
              color="inherit"
              variant="contained"
              onClick={menu.onTrue}
              startIcon={<Iconify icon="carbon:menu" />}
            >
              Menu Mobile
            </Button>
          }
        />

        <Stack direction="row" spacing={3} mt={5}>
          <Card sx={{ width: 260, flexShrink: 0, overflow: 'unset', zIndex: 9 }}>
            <Typography variant="h6" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <Iconify icon="eva:list-fill" width={24} sx={{ mr: 1 }} /> Menu Vertical
            </Typography>

            <MegaMenuDesktopVertical data={data} />
          </Card>

          <div>
            <Box
              component="img"
              alt="any photo"
              src={_mock.image.cover(2)}
              sx={{ borderRadius: 1 }}
            />
          </div>
        </Stack>
      </Container>
    </>
  );
}

// MOCK DATA
// ----------------------------------------------------------------------

const PRODUCTS = [...Array(10)].map((_, index) => ({
  name: _mock.productName(index),
  coverUrl: _mock.image.product(index),
  path: '#',
}));

const TAGS = [
  { name: 'Paper Cup', path: '#' },
  { name: 'Lotion Pump', path: '#' },
  { name: 'Brush Cutter', path: '#' },
  { name: 'Display Rack', path: '#' },
  { name: 'Glass Bottle', path: '#' },
];

const data = [
  {
    title: 'Parent 1',
    path: '#',
    icon: <Iconify icon="carbon:accessibility-alt" sx={{ width: 1, height: 1 }} />,
    more: { title: 'More Categories', path: '#' },
    products: PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Parent 2',
    path: '#',
    icon: <Iconify icon="carbon:airplay" sx={{ width: 1, height: 1 }} />,
    more: { title: 'More Categories', path: '#' },
    products: PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Parent 3',
    path: '#',
    icon: <Iconify icon="carbon:api" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Parent 4',
    path: '#',
    icon: <Iconify icon="carbon:basketball" sx={{ width: 1, height: 1 }} />,
  },
];

import uuid from 'react-uuid';

function ProductsArray() {
  const Products = [
    {
      id: uuid(),
      category: 'notebook',
      name: 'Macbook Pro',
      price: 12900,
      image: 'https://assets.mcshark.at/uploads/2023/01/nav_mbpro-m2_14.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: uuid(),
      category: 'smartphone',
      name: 'Samsung Galaxy S20',
      price: 500,
      image:
        'https://mobiltel.cz/img/580/580/samsung-galaxy-s20-fe-g780f-6gb-128gb-dual-sim-cloud-navy_7.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: uuid(),
      category: 'tablet',
      name: 'Lenovo Tab 4',
      price: 800,
      image: 'https://www.dargo.cz/katalog/LNTZA2R0021CZ/photos/lenovo1.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: uuid(),
      category: 'keyboard',
      name: 'Logitech G213',
      price: 200,
      image: 'https://cdn2.bscom.cz/Foto/LegendFoto/photos/MC054m5a_3.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: uuid(),
      category: 'mouse',
      name: 'Logitech G502',
      price: 100,
      image:
        'https://resource.logitech.com/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: uuid(),
      category: 'headphones',
      name: 'Logitech G432',
      price: 300,
      image: 'https://cdn.alza.cz/Foto/LegendFoto/photos/JL289e2a1_1.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: uuid(),
      category: 'monitor',
      name: 'Smasung Odyssey G9',
      price: 700,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/cz/ls49ag950npxen/gallery/cz-odyssey-neo-g9-g95na-400777-ls49ag950npxen-536184125?$650_519_PNG$',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: uuid(),
      category: 'printer',
      name: 'Dell 1234',
      price: 400,
      image:
        'https://www.quill.com/content/iw/images/category/printers.png?v=zRvqlvFTOYKY-dl2p7RpEg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
  ];
  return Products;
}

export default ProductsArray;

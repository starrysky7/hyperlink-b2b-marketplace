import Paper from "../paper";
import Image from "next/image";
import { Typography, Button, Grid } from "@mui/material";
import ProductCardVariant from "../catalog/product-card-variant";

export default function ProductGrid() {
  const products = [
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
    {
      sku: "A10B10",
      name: "Macbook Pro M2 2022 8GB RAM 256GB SSD",
      shortDescription: "All new Macbook Pro",
      cost: "100",
      msrp: "120",
      variants: [
        {
          name: "Space Grey",
          value: "space-gray",
        },
        {
          name: "Silver",
          value: "silver",
        },
      ],
    },
  ];

  const productsPerRow = 4;

  return (
    <Grid container columnSpacing={1.5} rowSpacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProductCardVariant
            product={product}
            inCart={false}
            inStarred={false}
          />
        </Grid>
      ))}
    </Grid>
  );
}

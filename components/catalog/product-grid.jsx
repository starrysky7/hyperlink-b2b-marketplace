import Paper from "../paper";
import Image from "next/image";
import { Typography, Button, Grid } from "@mui/material";
import ProductCard from "./product-card";

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
        <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
          <ProductCard product={product} inCart={false} inStarred={false} />
        </Grid>
      ))}
    </Grid>
  );
}

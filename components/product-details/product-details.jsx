import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ProductDetails() {
  const productDetails = {
    name: "2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey",
    msrp: 110000,
    discountValue: 10,
    discountType: "percentage",
    variants: [
      {
        name: "Size name",
        options: [
          {
            name: "1TB",
            value: "1tb",
          },
          {
            name: "256GB",
            value: "256gb",
          },
          {
            name: "512GB",
            value: "512gb",
          },
        ],
      },
      {
        name: "Style name",
        options: [
          {
            name: "Apple M1 Max",
            value: "m1max",
          },
          {
            name: "Apple M1",
            value: "m1",
          },
          {
            name: "Apple M1 Pro",
            value: "m1pro",
          },
        ],
      },
      {
        name: "Colour",
        options: [
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
    ],
    detailedDescription:
      "Aspect Ratio:3:2;The most powerful Surface Laptop. Quad-core powered 11th Gen Intel Core H Series processors handle your most complex workloads. Design, animate, and render at top speed. Step up to the award-winning Ampere — NVIDIA's 2nd gen RTX architecture, enabling ray-traced graphics and cutting-edge AI features from NVIDIA GeForce RTX 3050 Ti.;Boundary-pushing design with sleek 14.4“ (5) touchscreen makes seamless transitions from laptop to entertainment-ready stage to portable creative canvas. Pair with Surface Slim Pen 2* for the best digital pen experience yet, featuring the feeling of pen on paper(7). Magnetically attach, store, and charge under the front of the keyboard.",
  };

  return (
    <Box>
      <Stack spacing={1}>
        {/*
         *
         *
         * product name
         */}
        <Typography variant="h1">{productDetails?.name}</Typography>

        {/*
         *
         * product cost
         *
         */}

        {(() => {
          //when product discount is available and type is percentage
          if (
            productDetails.discountValue &&
            productDetails.discountType === "percentage"
          ) {
            return (
              <Typography variant="h2">
                <span style={{ color: "red", paddingRight: "10px" }}>
                  -{productDetails.discountValue}%
                </span>
                Rs.{productDetails.msrp}
              </Typography>
            );
          }
          //when product discount is available and type is flat
          else if (
            productDetails.discountValue &&
            productDetails.discountType === "flat"
          )
            //when product discount is not available
            return `-${(<strike>{productDetails.msrp}</strike>)} ${
              productDetails.discountValue
            }`;
          else {
            return productDetails.msrp;
          }
        })()}

        {/*
         *
         * product variants
         *
         */}

        <Stack spacing={1}>
          {productDetails?.variants.map((variant, i) => {
            return (
              <Box>
                <Typography key={i}>{variant.name}</Typography>
                {variant.options.map((option) => {
                  return (
                    <Button size="small" variant="outlined">
                      {option.name}
                    </Button>
                  );
                })}
              </Box>
            );
          })}
        </Stack>

        {/*
         *
         * detailed description
         *
         */}

        <Typography
          dangerouslySetInnerHTML={{
            __html: productDetails.detailedDescription,
          }}
        ></Typography>
      </Stack>
    </Box>
  );
}

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "./elements/text-field";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SignupForm() {
  //state to manage form steps
  const [currentStep, setCurrentStep] = useState(1);

  //dummy form data

  const totalSteps = 3;
  const steps = [
    {
      step: 1,
      sections: [
        {
          title: "",
          fields: [
            {
              id: "emailAddress",
              label: "Email Address",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "password",
              label: "Password",
              type: "password",
              constraints: {
                required: true,
                regex: null,
              },
            },
          ],
        },
      ],
    },
    {
      step: 2,
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              id: "name",
              label: "Name",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "age",
              label: "Age",
              type: "number",
              constraints: {
                required: true,
                regex: null,
              },
            },
          ],
        },
      ],
    },
    {
      step: 3,
      sections: [
        {
          title: "Shipping Address",
          fields: [
            {
              id: "shippingAddress1",
              label: "Address Line 1",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "shippingAddress2",
              label: "Address Line 2",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "shippingCity",
              label: "City",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "shippingState",
              label: "State",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "shippingPostCode",
              label: "Post Code",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "shippingCountry",
              label: "Country",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
          ],
        },
        {
          title: "Billing Address",
          fields: [
            {
              id: "billingAddress1",
              label: "Address Line 1",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "billingAddress2",
              label: "Address Line 2",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "billingCity",
              label: "City",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "billingState",
              label: "State",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "billingPostCode",
              label: "Post Code",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
            {
              id: "billingCountry",
              label: "Country",
              type: "text",
              constraints: {
                required: true,
                regex: null,
              },
            },
          ],
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: "rgba(255,255,255,255)",
        padding: "40px 40px",
        width: "500px",
        height: "fit-content",
        borderRadius: "6px",
        border: "1px solid #e1e1e1",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h2">New account</Typography>
        <Box>
          <Typography>{currentStep}</Typography>

          {steps[currentStep]?.sections.map((section) => (
            <Box>
              <Typography variant="h2">{section?.title}</Typography>
              {section?.fields?.map((field) => (
                <TextField
                  id={field?.id}
                  label={field?.label}
                  type={field?.type}
                  sx={{ marginBottom: "15px" }}
                />
              ))}
            </Box>
          ))}
        </Box>
        <Stack direction="row" spacing={1} sx={{ alignSelf: "end" }}>
          <Button
            variant="outlined"
            onClick={() => {
              if (currentStep > 1) setCurrentStep(currentStep - 1);
            }}
          >
            Go back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
            }}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
